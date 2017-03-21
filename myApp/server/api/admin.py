from django.contrib import admin
from .models import CouserList,CourseComments, Profile
# Register your models here.
admin.site.register(CouserList)
admin.site.register(CourseComments)
admin.site.register(Profile)