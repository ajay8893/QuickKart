from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import EmailTokenObtainPairSerializer
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import authenticate
from .models import CustomUser
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer, ChangePasswordSerializer


class EmailTokenObtainPairView(TokenObtainPairView):
    serializer_class = EmailTokenObtainPairSerializer


# Register new user

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user" : UserSerializer(user, context=self.get_serializer_context()).data,
            "message": "User register successfully"
        }, status=status.HTTP_201_CREATED)


# login user manually

class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        return Response({
            "user": UserSerializer(user).data,
            "message": "Login successful"
        })


# change password

class ChangePasswordView(generics.UpdateAPIView):
    serializer_class = ChangePasswordSerializer
    model = CustomUser
    permission_classes = [IsAuthenticated]

    def get_object(self, queryset=None):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        # check old password
        if not user.check_password(serializer.validated_data['old_password']):
            return Response({"old_password": ["wrong password."]}, status=status.HTTP_400_BAD_REQUEST)

        # set new password
        user.set_password(serializer.validated_data['new_password'])
        user.save()
        return Response({"message": "password updated successfully"}, status=status.HTTP_200_OK)
