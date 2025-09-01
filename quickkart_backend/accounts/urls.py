from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from .views import EmailTokenObtainPairView, RegisterView, LoginView, ChangePasswordView

urlpatterns = [
    # JWT authentication routes
    path('auth/login/', EmailTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
    # user management
    path('auth/register/', RegisterView.as_view(), name='register'),
    # path('auth/login/', LoginView.as_view(), name='login')
    path('auth/change-password/', ChangePasswordView.as_view(), name='change_password'),
]
