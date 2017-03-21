
from django.conf.urls import include, url
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token
import views
from rest_framework_jwt.views import refresh_jwt_token
from django.views.decorators.csrf import csrf_exempt

urlpatterns = [
    url(r'^login', views.user.as_view() ),
    url(r'^api-token-auth/', obtain_jwt_token),
    url(r'^api-token-refresh/', refresh_jwt_token),
    url(r'^courses', views.courseList.as_view()),
    url(r'^register',views.register.as_view()),
    url(r'^course/comments', views.courseComments.as_view()),
    url(r'^course/post/comment', views.postComment.as_view()),
    url(r'^profile', views.getProfile.as_view())
]

