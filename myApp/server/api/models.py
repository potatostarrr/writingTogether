from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User


# Create your models here.




class CouserList(models.Model):
    courseName = models.CharField(max_length=120)
    courseDescription = models.TextField()
    preview = models.CharField(max_length=200, default='www')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courselist')
    def __unicode__(self):
        return self.courseName

    @property
    def username(self):
        return self.user.username


class CourseComments(models.Model):
    course = models.ForeignKey(CouserList, on_delete=models.CASCADE, related_name='comments')
    post_date = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, related_name='comments')
    content = models.TextField()
    @property
    def course_name(self):
        return self.course.courseName

    @property
    def username(self):
        return self.user.username

    def __unicode__(self):
        return self.courseName+':'+self.username+':'+str(self.post_date)