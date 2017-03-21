from django.contrib.auth.models import User
from .serializers import UserSerializer, CourseListSerializer, CourseCommentSerializer,ProfileSerializer
from .models import CouserList,CourseComments,Profile
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


from rest_framework.authentication import SessionAuthentication, BasicAuthentication,TokenAuthentication
from .authentication import LoginAuthentication



from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated,
    IsAdminUser,
    IsAuthenticatedOrReadOnly,
    )

from utils import create_token

class courseList(APIView):
    def get(self,request):
        username = request.user.username
        course = CouserList.objects.filter(user__username=username)
        serializer = CourseListSerializer(course, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class register(APIView):
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    def post(self, request, format=None):
        data = request.data
        try:
            username = data['username']
            password = data['password']
        except:
            return Response('Bad Request', status=status.HTTP_404_NOT_FOUND)
        user = User.objects.filter(username=username)
        if user.exists():
            return Response({'message':'User Already Exist'}, status=status.HTTP_406_NOT_ACCEPTABLE)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.create(serializer.validated_data)
            token = create_token({'username':username,'password':password})
            return Response({'username':username,'token':token}, status=status.HTTP_201_CREATED)
        return Response('Invalid Input Data', status=status.HTTP_400_BAD_REQUEST)

class user(APIView):
    """
    List all Users, or create a new User.
    """
    #authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer
    def get(self, request, format=None):
        Users = User.objects.all()
        serializer = UserSerializer(Users, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        #user = User.objects.get(username=request.data['username'])
        data = request.data
        serializer = UserSerializer(data = data)

        if serializer.validate(data=data):
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
        # if serializer.is_valid():
        #     #serializer.save()
        #
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class courseComments(APIView):
    #permission_classes = (AllowAny,)
    def post(self,request,format=None):
        data = request.data
        try:
            course_name = data['courseName']
        except:
            return Response('Bad Request',status= status.HTTP_404_NOT_FOUND)
        comments = CourseComments.objects.filter(course__course_name=course_name)
        serializer = CourseCommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class postComment(APIView):
    def post(self,request):
        try:
            course_name = request.data['courseName']
            content = request.data['content']
            course = CouserList.objects.filter(course_name=course_name).first()
        except:
            return Response('Bad Request', status=status.HTTP_404_NOT_FOUND)
        user = request.user
        newComment = CourseComments.objects.post_comment(user,content,course)
        comments = CourseComments.objects.filter(course__course_name=course_name)
        serializer = CourseCommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
        #return Response(CourseCommentSerializer(newComment).data, status=status.HTTP_200_OK)

class getProfile(APIView):
    def get(self,request):
        profile = Profile.objects.filter(user=request.user)
        serializer = ProfileSerializer(profile.first())
        return Response(serializer.data, status=status.HTTP_200_OK)