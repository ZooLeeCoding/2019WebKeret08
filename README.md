AuthGuard bevonása:
ng generate service AuthService

Önálló feladat:
1. Anti AuthGuard létrehozása, a Signupra és a Loginra csak akkor
léphessünk át, ha nincs username a localStorage-ban!
2. A main várjon a name mellett egy count paramétert is, amely egy
number típusú értéket tartalmaz, legyen ez az my-firszt-component-nek átadva @Input-ként, mint a vásárláshoz felhasználható pénzösszeg!
3. A name és count paramétert mind a login mind a signup komponens küldje át (a count-hoz legyen egy extra, type="number" típusú input mező az űrlapokon)
