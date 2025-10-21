# EcoRide - Application de covoiturage / Carpooling Application

Application web moderne permettant aux utilisateurs de proposer et réserver des trajets, avec un système d’avis intégré.  
Modern web application allowing users to offer and book rides with an integrated review system.

---

## 🇫🇷 Fonctionnalités

- Recherche et réservation de trajets  
- Gestion des véhicules et des réservations  
- Authentification JWT sécurisée  
- Gestion des profils et avis utilisateurs

## 🇬🇧 Features

- Search and book available trips  
- Vehicle and booking management  
- Secure JWT authentication  
- User profiles and reviews

---

## 🧰 Technologies

- **Backend** : Symfony 7.3 (PHP 8.2), PostgreSQL, MongoDB Atlas  
- **Frontend** : HTML, CSS, JavaScript  
- **Déploiement / Deployment** : Heroku, Composer, NPM

---

## 🏗️ Architecture

- PostgreSQL : utilisateurs, trajets, réservations  
- MongoDB : avis et commentaires  
- Frontend SPA communiquant avec une API REST Symfony

PostgreSQL: users, trips, reservations  
MongoDB: reviews and comments  
Frontend SPA communicating with a Symfony REST API

---

## ⚙️ Installation

### 🇫🇷 Étapes
1. Cloner le projet  
2. Installer les dépendances PHP et Node.js  
3. Configurer `.env`  
4. Créer la base de données et exécuter les migrations  
5. Générer les clés JWT  
6. Lancer les serveurs backend et frontend

### 🇬🇧 Steps
1. Clone the repository  
2. Install PHP and Node.js dependencies  
3. Configure `.env`  
4. Create the database and run migrations  
5. Generate JWT keys  
6. Start backend and frontend servers

---

## ☁️ Déploiement Heroku / Heroku Deployment

- Créer une application Heroku / Create a Heroku app  
- Ajouter PostgreSQL / Add PostgreSQL  
- Configurer MongoDB Atlas / Configure MongoDB Atlas  
- Définir les variables d’environnement / Set environment variables  
- Déployer et exécuter les migrations / Deploy and run migrations

---

## 🔌 API Endpoints

| Fonctionnalité / Feature | Endpoint |
|---------------------------|----------|
| Authentification / Auth | `/api/login`, `/api/register` |
| Utilisateurs / Users | `/api/users/{id}` |
| Trajets / Trips | `/api/trips` |
| Réservations / Reservations | `/api/reservations` |
| Avis / Reviews | `/api/trip/{id}/reviews` |
| Véhicules / Cars | `/api/cars` |

---

## 🔒 Sécurité / Security

- Authentification JWT / JWT authentication  
- Hashage des mots de passe / Password hashing  
- Protection CORS et validation des données / CORS protection and data validation

---

## 🧪 Tests

```bash
php bin/phpunit
