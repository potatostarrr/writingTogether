from rest_framework.serializers import (ModelSerializer,DateTimeField, StringRelatedField,RelatedField,ReadOnlyField)
from django.db.models import  Q
#from django.contrib.auth.models import User
from rest_framework_jwt.views import obtain_jwt_token
from .models import CouserList, CourseComments, Profile
from django.contrib.auth import get_user_model
User = get_user_model()

class UserSerializer(ModelSerializer):
    course = StringRelatedField(source='courselist',many=True,read_only=True)
    class Meta:
        model = User
        fields = [
            'username',
            'password',
            'course'
        ]
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

class CourseListSerializer(ModelSerializer):
    #username = ReadOnlyField()
    class Meta:
        model = CouserList
        fields = [
            'course_name',
            'courseDescription',
            'preview',
            'username',
            'videoId',
        ]

class CourseCommentSerializer(ModelSerializer):
    post_time = DateTimeField(source="post_date", format="%Y-%m-%d %H:%M:%S")
    class Meta:
        model =CourseComments
        fields = [
            'course_name',
            'username',
            'post_time',
            'content',
        ]

class ProfileSerializer(ModelSerializer):
    class Meta:

        model = Profile
        fields = [
            'username',
            'first_name',
            'last_name',
            'stars',
            'city',
        ]
