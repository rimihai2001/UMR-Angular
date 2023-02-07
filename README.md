# Underground Monsters Romania

##Descriere

O aplicatie ce permite vizualizarea concertelor viitoare si permite adaugarea altor concerte de catre un utilizator cu cont.

##Demo
[Demo](https://drive.google.com/file/d/152ImDXIeeKm4ghClnezWFkmac8utv9a4/view?usp=share_link)

## Cerinte

- Sa aiba mai multe rute  (2p)

Se pot observa in [App Routing](https://github.com/rimihai2001/Angular-Project/blob/main/src/app/app-routing.module.ts).

- Sa se foloseasca componente reutilizabile (2p)

[Promo banner-ul](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/components/promo-banner) pentru promovarea paginii Rock Monsters Romania si [NavBar-ul](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/components/header) au fost create pentru a fi componente reutilizabile in cadrul paginii.

- Sa se comunice intre componente (2p)

Avem componenta [Greeting Message](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/components/greeting-message) care este copil al componentei [Main Page](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/pages/main-page).

- Rute publice si private (1p)

Main Page si Add Concert Page pot fi accesate doar in cazul in care utilizatorul este autentificat dupa cum se poate observa in [App Routing](https://github.com/rimihai2001/Angular-Project/blob/main/src/app/app-routing.module.ts), accesul lor fiind securizat cu [Auth Guard](https://github.com/rimihai2001/Angular-Project/blob/main/src/app/services/auth.guard.ts).

- Sa fie cel putin o pagina cu un form ( login/register) (2p)

Paginile ce contin forms sunt paginile de [Login](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/pages/login-page), [Sign Up](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/pages/signup-page) si [Add Concert](https://github.com/rimihai2001/Angular-Project/tree/main/src/app/pages/add-concert-page).

- Firebase sau orice alt mediu de backend (1p) 

In proiect este folosit Firebase pentru autentificare si baza de date.
