import requests
import base64

from django.http import HttpResponse

from drf_yasg.utils import swagger_auto_schema

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from djoser.views import UserViewSet as BaseUserViewSet

from services.models import UserService, Service

import yaml

from .serializers import UserSerializer, UserServiceSerializer, UploadDocumentSerializer


WEBHOOK_TOKEN = 'tuzwh9ecszs0jhhc'
B24_USER_ID = '7'


class UserContactView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user

        if not user.contactId:
            return Response({'error': 'contactId not found.'}, status=400)

        # contact_id = user.contactId
        contact_id = 11

        url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'crm.contact.get.json?id={contact_id}')

        response = requests.get(url)

        data = response.json().get('result', {})

        filtered_data = {
            'ID': data.get('ID'),
            'NAME': data.get('NAME'),
            'SECOND_NAME': data.get('SECOND_NAME'),
            'LAST_NAME': data.get('LAST_NAME'),
            'LEAD_ID': data.get('LEAD_ID'),
            'TYPE_ID': data.get('TYPE_ID'),
            'BIRTHDATE': data.get('BIRTHDATE'),
            'HAS_PHONE': data.get('HAS_PHONE'),
            'HAS_EMAIL': data.get('HAS_EMAIL'),
            'HAS_IMOL': data.get('HAS_IMOL'),
            'DATE_CREATE': data.get('DATE_CREATE'),
            'DATE_MODIFY': data.get('DATE_MODIFY'),
            'ASSIGNED_BY_ID': data.get('ASSIGNED_BY_ID'),
            'LAST_ACTIVITY_TIME': data.get('LAST_ACTIVITY_TIME'),
            'ADDRESS': data.get('ADDRESS'),
            'ADDRESS_2': data.get('ADDRESS_2'),
            'ADDRESS_CITY': data.get('ADDRESS_CITY'),
            'ADDRESS_POSTAL_CODE': data.get('ADDRESS_POSTAL_CODE'),
            'ADDRESS_REGION': data.get('ADDRESS_REGION'),
            'ADDRESS_PROVINCE': data.get('ADDRESS_PROVINCE'),
            'ADDRESS_COUNTRY': data.get('ADDRESS_COUNTRY'),
            'ADDRESS_LOC_ADDR_ID': data.get('ADDRESS_LOC_ADDR_ID'),
            'LAST_ACTIVITY_BY': data.get('LAST_ACTIVITY_BY'),
        }

        return Response({'result': filtered_data}, status=response.status_code)


class UserManagerView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user_contact_view = UserContactView()
        data = user_contact_view.get(request).data
        assigned_by_id = data.get('result', {}).get('ASSIGNED_BY_ID')

        url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'user.get.json?id={assigned_by_id}')

        response = requests.get(url)

        return Response(response.json(), status=response.status_code)


class UserCompaniesView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="ХУК. Список компаний",
        responses={
            201: 'crm.contact.company.items.get',
            400: 'Bad request',
            404: 'Service not found',
        }
    )
    def get(self, request):
        user_contact_view = UserContactView()
        data = user_contact_view.get(request).data
        user_id = data.get('result', {}).get('ID')

        url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'crm.contact.company.items.get.json?id={user_id}')

        response = requests.get(url)

        return Response(response.json(), status=response.status_code)


class UserCompanyDetailsView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="ХУК. 1-ая компания",
        responses={
            201: 'crm.company.get',
            400: 'Bad request',
            404: 'Service not found',
        }
    )
    def get(self, request):
        user_companies_view = UserCompaniesView()
        companies_response = user_companies_view.get(request)
        company_id_list = [company['COMPANY_ID'] for company in
                           companies_response.data.get('result', [])]
        company_details_list = []

        for company_id in company_id_list:
            url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
                   f'crm.company.get.json?id={company_id}')
            response = requests.get(url)

            if response.status_code == 200:
                company_data = response.json().get('result', {})

                filtered_company_data = {
                    'COMPANY_TYPE': company_data.get('COMPANY_TYPE'),
                    'TITLE': company_data.get('TITLE'),
                    'LOGO': company_data.get('LOGO'),
                    'LEAD_ID': company_data.get('LEAD_ID'),
                    'HAS_PHONE': company_data.get('HAS_PHONE'),
                    'HAS_EMAIL': company_data.get('HAS_EMAIL'),
                    'HAS_IMOL': company_data.get('HAS_IMOL'),
                    'BANKING_DETAILS': company_data.get('BANKING_DETAILS'),
                    'INDUSTRY': company_data.get('INDUSTRY'),
                    'REVENUE': company_data.get('REVENUE'),
                    'CURRENCY_ID': company_data.get('CURRENCY_ID'),
                    'EMPLOYEES': company_data.get('EMPLOYEES'),
                    'OPENED': company_data.get('OPENED'),
                    'IS_MY_COMPANY': company_data.get('IS_MY_COMPANY'),
                    'LAST_ACTIVITY_TIME': company_data.get('LAST_ACTIVITY_TIME'),
                    'ADDRESS': company_data.get('ADDRESS'),
                    'ADDRESS_2': company_data.get('ADDRESS_2'),
                    'ADDRESS_CITY': company_data.get('ADDRESS_CITY'),
                    'ADDRESS_POSTAL_CODE': company_data.get('ADDRESS_POSTAL_CODE'),
                    'ADDRESS_REGION': company_data.get('ADDRESS_REGION'),
                    'ADDRESS_PROVINCE': company_data.get('ADDRESS_PROVINCE'),
                    'ADDRESS_COUNTRY': company_data.get('ADDRESS_COUNTRY'),
                    'ADDRESS_COUNTRY_CODE': company_data.get('ADDRESS_COUNTRY_CODE'),
                    'ADDRESS_LOC_ADDR_ID': company_data .get('ADDRESS_LOC_ADDR_ID'),
                    'ADDRESS_LEGAL': company_data.get('ADDRESS_LEGAL'),
                    'REG_ADDRESS': company_data.get('REG_ADDRESS'),
                    'REG_ADDRESS_2': company_data.get('REG_ADDRESS_2'),
                    'REG_ADDRESS_CITY': company_data.get('REG_ADDRESS_CITY'),
                    'REG_ADDRESS_POSTAL_CODE': company_data.get('REG_ADDRESS_POSTAL_CODE'),
                    'REG_ADDRESS_REGION': company_data.get('REG_ADDRESS_REGION'),
                    'REG_ADDRESS_PROVINCE': company_data.get('REG_ADDRESS_PROVINCE'),
                    'REG_ADDRESS_COUNTRY': company_data.get('REG_ADDRESS_COUNTRY'),
                    'REG_ADDRESS_COUNTRY_CODE': company_data.get('REG_ADDRESS_COUNTRY_CODE'),
                    'REG_ADDRESS_LOC_ADDR_ID': company_data.get('REG_ADDRESS_LOC_ADDR_ID'),
                    'LAST_ACTIVITY_BY': company_data.get('LAST_ACTIVITY_BY'),
                    'UF_CRM_ASSIGNED_FOLDER': company_data.get('UF_CRM_ASSIGNED_FOLDER'),
                    'UF_CRM_COMPANY_INN': company_data.get('UF_CRM_COMPANY_INN'),
                }

                company_details_list.append(filtered_company_data)
            else:
                company_details_list.append({'error': 'Error fetching company'
                                             f'{company_id}: {response.text}'})

        return Response(company_details_list, status=200)


class UserCompanyDocumentsView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="ХУК. Документы (Список)",
        responses={
            201: 'disk.folder.getchildren',
            400: 'Bad request',
            404: 'Service not found',
        }
    )
    def get(self, request):
        user_companies_view = UserCompanyDetailsView()
        companies_response = user_companies_view.get(request)
        companies_data = companies_response.data

        if not companies_data:
            return Response({"error": "No associated companies found."},
                            status=404)

        company = companies_data[0]  # Берем первую компанию пользователя
        folder_id = company.get('UF_CRM_ASSIGNED_FOLDER')

        if not folder_id:
            return Response({"error": "Folder ID not found in company data."},
                            status=400)

        url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'disk.folder.getchildren.json?id={folder_id}')
        response = requests.get(url)
        response_data = response.json()
        base_url = request.build_absolute_uri('/api/v1/hooks/downloadfile')

        documents = response_data.get('result', [])
        if not documents:
            return Response({"error":
                             "No documents found in the company folder."},
                            status=404)

        document_list = [
            {
                'ID': doc.get('ID'),
                'NAME': doc.get('NAME'),
                'TYPE': doc.get('TYPE'),
                'DOWNLOAD_URL_OLD': doc.get('DOWNLOAD_URL'),
                'DOWNLOAD_URL': f"{base_url}/{folder_id}/{doc.get('ID')}",
                'SIZE': doc.get('SIZE'),
                'CREATE_TIME': doc.get('CREATE_TIME'),
                'UPDATE_TIME': doc.get('UPDATE_TIME'),
            }
            for doc in documents
        ]

        return Response({"documents": document_list}, status=200)


class DownloadFileView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="ХУК. Документы (Скачинвание)",
        responses={
            201: 'disk.folder.getchildren',
            400: 'Bad request',
            404: 'Service not found',
        }
    )
    def get(self, request, folder_id, file_id):
        # Получение информации о файле
        url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'disk.folder.getchildren.json?id={folder_id}')
        response = requests.get(url)
        response_data = response.json()

        document = next((doc for doc in response_data.get('result', []) if doc.get('ID') == file_id), None)

        if not document:
            return Response({"error": "Document not found."}, status=404)

        type = document.get('TYPE')
        
        if type == 'folder':
            folder_id = document.get('ID')
            url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'disk.folder.getchildren.json?id={folder_id}')
            response = requests.get(url)
            response_data = response.json()
            base_url = request.build_absolute_uri('/api/v1/hooks/downloadfile')

            documents = response_data.get('result', [])
            if not documents:
                return Response([], status=200)

            document_list = [
                {
                    'ID': doc.get('ID'),
                    'NAME': doc.get('NAME'),
                    'TYPE': doc.get('TYPE'),
                    'DOWNLOAD_URL_OLD': doc.get('DOWNLOAD_URL'),
                    'DOWNLOAD_URL': f"{base_url}/{folder_id}/{doc.get('ID')}",
                    'SIZE': doc.get('SIZE'),
                    'CREATE_TIME': doc.get('CREATE_TIME'),
                    'UPDATE_TIME': doc.get('UPDATE_TIME'),
                }
                for doc in documents
            ]

            return Response({"documents": document_list}, status=200)
        else:
            download_url = document.get('DOWNLOAD_URL')

            # Загружаем файл с Bitrix24
            file_response = requests.get(download_url)
            if file_response.status_code != 200:
                return Response({"error": "Failed to download the file."}, status=400)

            # Возвращаем файл пользователю
            return HttpResponse(file_response.content,
                                content_type=file_response.headers['Content-Type'],
                                headers={
                                    'Content-Disposition': f'attachment; filename="{document["NAME"]}"'
                                })


class UserUploadDocumentView(APIView):
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Загрузка пользовательского документа",
        request_body=UploadDocumentSerializer,
        responses={
            200: 'Файл успешно загружен',
            400: 'Ошибка при загрузке файла',
            404: 'Папка "Пользовательские документы" не найдена',
        }
    )

    def post(self, request):
        # Получаем содержимое файла и имя файла из запроса
        file_content = request.data.get('fileContent')
        file_name = request.data.get('fileName')

        if not file_content or not file_name:
            return Response({"error": "fileContent and fileName are required."}, status=400)

        # Извлекаем Content-Type из fileContent, если он присутствует
        if ';' in file_content:
            content_type = file_content.split(';')[0].split(':')[1]
            file_content = file_content.split(',')[1]  # Извлекаем только base64 часть
            # file_format = content_type.split('/')[1] # feture

        # Декодируем base64 в бинарные данные
        try:
            file_content = base64.b64decode(file_content)
        except Exception as e:
            return Response({"error": f"Invalid base64 data: {str(e)}"}, status=400)

        # Получаем ID папки "Пользовательские документы"
        user_company_documents_view = UserCompanyDocumentsView()
        folder_response = user_company_documents_view.get(request)
        folder_data = folder_response.data

        user_documents_folder = next((doc for doc in folder_data.get('documents', []) if doc.get('NAME') == 'Пользовательские документы'), None)

        if not user_documents_folder:
            return Response({"error": "User documents folder not found."}, status=404)

        folder_id = user_documents_folder.get('ID')

        # Формируем URL для загрузки файла
        url = (f'https://b-p24.ru/rest/{B24_USER_ID}/{WEBHOOK_TOKEN}/'
               f'disk.folder.uploadfile.json?id={folder_id}&data[NAME]={file_name}')

        # Выполняем запрос на получение uploadUrl
        response = requests.post(url)
        response_data = response.json()

        if 'error' in response_data:
            return Response({"error": response_data['error']}, status=400)
        
        # Получаем uploadUrl из ответа
        upload_url = response_data['result']['uploadUrl']
        
        files = {
            'file': (file_name, file_content, content_type)
        }

        # Выполняем запрос на загрузку файла по uploadUrl
        upload_response = requests.post(upload_url, files=files)
        upload_response_data = upload_response.json()

        if 'error' in upload_response_data:
            return Response({"error": upload_response_data['error']}, status=400)

        # Удаляем ненужные поля из ответа
        result = upload_response_data.get('result', {})
        for key in ['STORAGE_ID', 'PARENT_ID', 'DELETED_TYPE', 'FILE_ID', 'CREATED_BY', 'UPDATED_BY', 'DELETED_BY', 'DETAIL_URL']:
            result.pop(key, None)

        # Добавляем поля DOWNLOAD_URL_OLD и DOWNLOAD_URL
        result['DOWNLOAD_URL_OLD'] = result.get('DOWNLOAD_URL')  # Предполагаем, что это поле есть в ответе
        base_url = request.build_absolute_uri('/api/v1/hooks/downloadfile')
        result['DOWNLOAD_URL'] = f"{base_url}/{folder_id}/{result.get('ID')}"

        return Response({"result": result}, status=201)



class UserServiceCreateView(APIView):
    """
        Подключение услуги
        Ограничил только на Админа. Далее переделаем на стаф
    """
    permission_classes = [IsAuthenticated, IsAdminUser]

    @swagger_auto_schema(
        operation_description="Создание связи между пользователем и услугой",
        responses={
            201: UserServiceSerializer,
            400: 'Bad request',
            404: 'Service not found',
        },
        request_body=UserServiceSerializer
    )
    def post(self, request):
        service_id = request.data.get('service_id')
        end_date = request.data.get('end_date')

        try:
            service = Service.objects.get(id=service_id)
        except Service.DoesNotExist:
            return Response({"error": "Service not found."},
                            status=status.HTTP_404_NOT_FOUND)

        if UserService.objects.filter(user=request.user,
                                      service=service).exists():
            return Response({"error":
                             "User is already connected to this service."},
                            status=status.HTTP_400_BAD_REQUEST)

        user_service = UserService.objects.create(
            user=request.user,
            service=service,
            status='active',
            end_date=end_date
        )

        return Response(UserServiceSerializer(user_service).data,
                        status=status.HTTP_201_CREATED)


class UserServiceStatusUpdateView(APIView):
    """
        Обновление статуса услуги 'active', 'blocked', 'expired'
        Ограничил только на Админа. Далее переделаем на стаф
    """
    permission_classes = [IsAuthenticated, IsAdminUser]

    @swagger_auto_schema(
        operation_description="Обновление статуса",
        responses={
            201: UserServiceSerializer,
            400: 'Bad request',
            404: 'Service not found',
        },
        request_body=UserServiceSerializer
    )
    def patch(self, request, user_service_id):
        try:
            user_service = UserService.objects.get(id=user_service_id,
                                                   user=request.user)
        except UserService.DoesNotExist:
            return Response({"error": "User service not found."},
                            status=status.HTTP_404_NOT_FOUND)

        # Получаем новый статус из запроса
        new_status = request.data.get('status')
        if new_status not in ['active', 'blocked', 'expired']:
            return Response({"error": "Invalid status."},
                            status=status.HTTP_400_BAD_REQUEST)

        # Обновляем статус услуги
        user_service.status = new_status
        user_service.save()

        return Response(UserServiceSerializer(user_service).data,
                        status=status.HTTP_200_OK)


class UserServiceExpirationCheckView(APIView):
    """
    Отбирает только активные услуги.
    Проверяет срок их действия, если истекли меняет статус на expired
    Возвращает только те, которые остаются активными.
    """
    permission_classes = [IsAuthenticated]

    @swagger_auto_schema(
        operation_description="Получение списка услуг",
        responses={
            201: UserServiceSerializer,
            400: 'Bad request',
            404: 'Service not found',
        }
    )
    def get(self, request):

        user_services = UserService.objects.filter(user=request.user,
                                                   status='active')

        active_services = []

        for user_service in user_services:
            user_service.check_status()
            if user_service.status == 'active':
                active_services.append(user_service)

        # Возвращаем только активные услуги
        return Response({"active_services":
                        [UserServiceSerializer(us).data
                            for us in active_services]},
                        status=status.HTTP_200_OK)


class AuthStatusView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'is_authenticated': True})


class UserViewSet(BaseUserViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer


def schema_view(request):
    with open('schema.yaml', 'r') as f:
        schema = yaml.safe_load(f)
    return HttpResponse(yaml.dump(schema), content_type='application/yaml')
