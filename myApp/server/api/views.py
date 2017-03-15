from django.contrib.auth.models import User
from .serializers import UserSerializer, CourseListSerializer, CourseCommentSerializer
from .models import CouserList,CourseComments
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
    permission_classes = (AllowAny,)
    def post(self,request, format=None):
        data = request.data
        try:
            username = data['username']
        except:
            return Response({'message':'Bad Request'}, status=status.HTTP_404_NOT_FOUND)
        course = CouserList.objects.filter(user__username=username)
        # if not course.exists():
        #     return Response([], status=status.HTTP_200_OK)
        serializer = CourseListSerializer(course, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)



    def get(self,request):
        data = request.data
        username = request.user.username
        course = CouserList.objects.filter(user__username=username)
        # if not course.exists():
        #     return Response([], status=status.HTTP_200_OK)
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
    permission_classes = (AllowAny,)
    def post(self,request,format=None):
        data = request.data
        try:
            course_name = data['courseName']
        except:
            return Response('Bad Request',status= status.HTTP_404_NOT_FOUND)
        print course_name
        comments = CourseComments.objects.filter(course__courseName=course_name)
        serializer = CourseCommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)