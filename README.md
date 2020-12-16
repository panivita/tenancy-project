## Tenancy-project
A simple web application that allow landlords to view and manage tenancies (addresses) in their inventory. A landlord can an overview of his portfolio, can add new tenancies to be part of  portfolio and can remove a tenancy from his portfolio. In page tenancy details landlord can see, update or remove information about tenancy (e.g. images, size, rooms, tenant information) and see a Google "street view" photo.
Application data was saved in MySQL database.

### Deploy
The application has been deployed to heroku [https://tenancy-challenge.herokuapp.com/](https://tenancy-challenge.herokuapp.com/).

## List of used libraries and frameworks

1. Open-source, front end, JavaScript library [ReactJs](https://reactjs.org/).
2. CSS framework [React Bootstrap](https://react-bootstrap.netlify.app/).
3. Icon library [React Bootstrap Icons](https://www.npmjs.com/package/react-bootstrap-icons).
4. [react-geocode](https://www.npmjs.com/package/react-geocode) was used to convert the location description (street address, city name, etc.) to geographic coordinates (i.e. latitude and longitude).
5. Simple React.js component [react-streetview](https://www.npmjs.com/package/react-streetview) was used for Google Street View.
6. Simple backend part was created using Node.js (express.js, knex.js), MySQL database.
