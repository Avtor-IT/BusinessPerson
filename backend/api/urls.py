from django.urls import path, include
from .views import (
     AuthStatusView, UserViewSet, UserContactView,
     UserManagerView, UserCompaniesView, UserCompanyDetailsView,
     UserCompanyDocumentsView, DownloadFileView,
     UserServiceCreateView, UserServiceStatusUpdateView,
     UserServiceExpirationCheckView, UserUploadDocumentView,
)
from rest_framework.routers import DefaultRouter

app_name = 'api'

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user')

urlpatterns = [
     path('v1/auth/', include('djoser.urls')),
     path('v1/auth/', include('djoser.urls.jwt')),
     path('v1/auth/status/',
          AuthStatusView.as_view(),
          name='auth-status'),
     path('v1/auth/me/',
          UserViewSet.as_view({'get': 'retrieve'}),
          name='user-me'),
     path('v1/hooks/users_me_contact/',
          UserContactView.as_view(),
          name='user-contact'),
     path('v1/hooks/users_me_manager/',
          UserManagerView.as_view(),
          name='user-manager'),
     path('v1/hooks/company_list/',
          UserCompaniesView.as_view(),
          name='company-list'),
     path('v1/hooks/user_me_company/',
          UserCompanyDetailsView.as_view(),
          name='user-company-details'),
     path('v1/hooks/user_company_documents/',
          UserCompanyDocumentsView.as_view(),
          name='user-company-documents'),
     path('v1/hooks/downloadfile/<str:folder_id>/<str:file_id>/',
          DownloadFileView.as_view(),
          name='download-file'),
     path('v1/hooks/upload_user_file/',
          UserUploadDocumentView.as_view(),
          name='upload-user-file'),
     path('', include(router.urls)),
     path('user-service/create/',
          UserServiceCreateView.as_view(),
          name='user-service-create'),
     path('user-service/<int:user_service_id>/update-status/',
          UserServiceStatusUpdateView.as_view(),
          name='user-service-update-status'),
     path('user-service/check-expiration/',
          UserServiceExpirationCheckView.as_view(),
          name='user-service-check-expiration'),
]
