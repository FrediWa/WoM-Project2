# WoM-Project2
## Technologies used
Built using the ever so popular (just kidding) FRPH stack.

The RFPH stack contains of
- Flask for the Backend
- React & SCSS for the Frontend
- Postgres for Database
- Heroku for DevOps

## Testing setup
Everything else should be live, just use `npm start` in the frontend directory to start the React app. 

Make the following request to register:
```
POST https://wom-project-1.herokuapp.com/users/login
Content-Type: application/json

{
    "email": "email",
    "password": "password"
}
```
Use these credentials to login to the React app.

## To-Do 
### Stugmäklaren
- [x] Make GET cabins/owned endpoint
- [x] Deploy stugmäklaren
### Backend
- [x] Establish DB connection
- [x] Set JWT to cookie
#### Services
- [x] GET a list of services
- [x] POST a type of service
- [x] PATCH a type of service
- [x] DELETE a type of service
#### Orders
- [x] GET all cabins you own
- [x] GET all orders for a specified cabin
- [x] POST an order for a specified cabin
- [x] PATCH order
- [x] DELETE order
### Frontend
- [x] Login screen
- [x] Login with JWT as cookie
- [x] Logout
- [x] Add component for listing your cabins
- [ ] Add component for editing services for a single cabin
- [x] Add component for adding  services to a selected cabin (lightbox modal suggested)
- [x] Delete a service

# Rapport
Jag försökte göra mitt bästa med requirements filen. Jag är inte hemskt bekant med Python utveckling så visste inte riktigt hur jag ens skulle testa att det funkade. Hoppas det inte blir några problem. Vi delade upp arbetet ganska långt så att jag skötte backenden och Samuel skötte frontenden. Vi har båda dock gjort lite av allting.
-Fredi

- Jag tyckte det gick bra att arbeta tillsammans, vi hjälpte varandra och jag tror att vi båda lärt oss mycket nytt. Tyckte det var kul, och lärde mig mycket nytt. 

## Driftsättning av projekt 1 samt ny endpoint
Här var det super mycket strul. Tror att jag pushade ännu några dagar före inlämningen sista ändringarna som Projekt 2 krävde. Samuel fixade driftsättningen men blev trött på mej efter en stund när jag bad honom göra det hela tiden så gav han mej rättigheter att göra driftsättningar själv. Det var ganska skönt att se hur lätt det är att göra en driftsättning med Git och Heroku CLI.
-Fredi

Driftsättningen tyckte jag gick helt bra, Heroku och dess guides var bra att arbeta med och det fans mycket info online.
- Samuel

##  REST API för underhållstjänster
Jag fixade GET/POST/PATCH/DELETE endpoints åt services. Dessa tyckte jag att inte behövde autentisering. Det stod inte något om det i projektbeskrivningen och dessutom tänkte jag att det blir onödigt då användare inte har roller (då kan ju vilken användare som helst göra det anyway). 

För att göra beställningar krävs jwt för alla endpoints. 

Största problemet här var SQL/Postgres och att error meddelanden i konsolen inte hjälpte alls.
-Fredi

## Integration med Stugmäklaren
För autentisering körs skickas en enkel request med JWTn till en endpoint på stugmäklaren som skickar helt enkelt "verified" om JWT är i skick. 

Vi hade en del problem med CORS men StackOverflow hjälpte till med det :D
-Fredi

## Grafisk app
Jobbade en del med att få react appen att fungera bra. Tycker att state och ref var svårt att ta sig ann. Sen ang. CSS och sådant så fixade det sig lätt, tycker appen ser helt bra ut nu. Skulle gärna fixa lite mera styling. 
- Samuel
