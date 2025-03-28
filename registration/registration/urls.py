from django.contrib import admin
from django.urls import path
from app1.views import convert, SignupPage, LoginPage, HomePage, LogoutPage,chocolate_cake,kheer,paneer_makhni,chicken_biryani,spaghetti_bolognese
from app1.views import ingresub,conversions,portscaling,ingredient_lookup,about
urlpatterns = [
    path('ingresub/', ingresub, name='ingresub'),    
    path('portscaling/',portscaling, name='portscaling'),
    path('conversions/',conversions, name='conversions'),
    path('admin/', admin.site.urls),
    path('',SignupPage,name='signup'),
    path('login/',LoginPage,name='login'),
    path('home/',HomePage,name='home'),
    path('about/',about,name='about'),
    path('logout/',LogoutPage,name='logout'),
    path('convert/', convert, name='convert'), 
    path('spaghetti-bolognese/',spaghetti_bolognese, name='spaghetti_bolognese'),
    path('chicken-biryani/', chicken_biryani, name='chicken_biryani'),
    path('paneer-makhni/',paneer_makhni, name='paneer_makhni'),
    path('kheer/', kheer, name='kheer'),
    path('chocolate-cake/',chocolate_cake, name='chocolate_cake'),
    path("get-ingredient/", ingredient_lookup, name="get_ingredient"),
    
]



