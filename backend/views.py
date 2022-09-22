from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(['GET'])
def getRoutes(request):
    routes = [
        'Hello welcome to myHome API',
        'List of API routes',
        '/api/listings',
        '/api/listings/create',
        '/api/listings/<id>/update',
        '/api/listings/<id>/delete'
    ]
    return Response(routes)
