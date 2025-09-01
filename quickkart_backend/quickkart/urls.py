from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # app routes
    path('api/accounts/', include('accounts.urls')),
    path('api/users/', include('users.urls')),
    path('api/products/', include('products.urls')),

]
