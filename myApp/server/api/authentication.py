from django.contrib.auth.models import User
from rest_framework import authentication
from rest_framework import exceptions

class LoginAuthentication(authentication.BaseAuthentication):
    def authenticate(self, request):
        username = request.data['username']
        if not username:
            return None

        try:
            user = User.objects.get(username=username)
            print user
        except User.DoesNotExist:
            raise exceptions.AuthenticationFailed('No such user')

        return (user, None)
