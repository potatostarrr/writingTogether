from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# Create your models here.




class CouserList(models.Model):
    course_name = models.CharField(max_length=120)
    courseDescription = models.TextField()
    videoId = models.CharField(max_length=11,default="IT8s6gPsqUg")
    preview = models.CharField(max_length=200, default='www')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courselist')
    def __unicode__(self):
        return self.course_name

    @property
    def username(self):
        return self.user.username


class CourseCommentsManager(models.Manager):
    def post_comment(self, user, content, course):
        new_comment = self.create(user=user,content=content,course=course)
        new_comment.save()
        return new_comment


class CourseComments(models.Model):
    course = models.ForeignKey(CouserList, on_delete=models.CASCADE, related_name='comments')
    post_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='comments')
    content = models.TextField()
    objects = CourseCommentsManager()
    @property
    def course_name(self):
        return self.course.course_name

    @property
    def username(self):
        return self.user.username

    def __unicode__(self):
        return self.course_name+':'+self.username+':'+str(self.post_date)

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, primary_key=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    middle_name = models.CharField(max_length=20, blank=True, null=True)
    stars = models.IntegerField(default=1)
    city = models.CharField(max_length=20)
    @property
    def username(self):
        return self.user.username

    def __unicode__(self):
        return self.user.username

