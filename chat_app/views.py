from django.http import JsonResponse
from .models import Chat
import json

def chat_view(request):
   
    if request.method == 'GET':
        nachrichten = list(Chat.objects.all().values())
        return JsonResponse(nachrichten, safe=False)
        
    
    if request.method == 'POST':
        data = json.loads(request.body)
        Chat.objects.create(
            name=data['name'],
            message=data['message']
        )
        return JsonResponse({'status': 'ok'})
