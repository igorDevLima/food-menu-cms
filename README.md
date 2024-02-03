# Food Menu with Strapi CMS :plate_with_cutlery:

Manage your web menu effortlessly, utilizing modern technologies.

## Features

- :dart: Intuitive Administrative Interface: Strapi provides a user-friendly admin panel that makes content management easy

- :sleeping: Dynamic Content Management: Create, update, and delete content without code intervention

- :whale: Deployment Ease: Docker reduces risks associated with environment issues

## Usage

To get started with this Strapi project and MySQL database, follow these steps:

### 1. Create a `.env` file at the root of your project and add the necessary configurations:

```shell
HOST=0.0.0.0
PORT=1337
APP_KEYS=iAHb/6qMfWBgypmmExq8nQ==,oHKs70CXiko6KIgRVGl7lw==,pEYqPX7hY1WxPEd6hwec8Q==,ORmM9mPs+r4RVzF1GmVPww==
API_TOKEN_SALT=mxicWPPirkqTc4Fwt+yPzg==
ADMIN_JWT_SECRET=omWL3639PXsQ+B1sZz1d4g==
TRANSFER_TOKEN_SALT=wJfgk+RMf/tcQBeRRTxevQ==

# Database
DATABASE_FILENAME=.tmp/data.db
JWT_SECRET=epJiVqzPqL44qVA19GhHbA==

DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_NAME=strapi
DATABASE_USERNAME=strapi
DATABASE_PASSWORD=password
NODE_ENV=development
DATABASE_CLIENT=mysql

```

### 2. Next, create and start the containers using the following command:

```shell
docker compose up --build
```

### 3. Wait until the containers are up and running.

### 4. Access the Strapi admin panel:

- In your browser by navigating to `http://localhost:1337/admin`

- Log in using the default credentials: username `admin@admin.com` and password `admin`.

### 5. Explore the food menu on your browser by visiting `http://localhost:3000`.

### 6. To stop containers and remove volumes:

```shell
docker compose down -v
```

Feel free to customize and enhance your Strapi experience by adapting the configurations to suit your project requirements. If you encounter any issues or have questions, refer to the documentation or seek help from the community.

## Technology

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### Front-end :nail_care:

| Technology | Description |
|------------|-------------|
| [**React**](https://reactjs.org/) | The most popular JavaScript library for building user interfaces. |
| [**Javascript**](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Is a scripting or programming language that allows you to implement complex features on web pages. |
| [**Bootstrap**](https://getbootstrap.com/) | Powerful, extensible, and feature-packed frontend toolkit. |                                                                                                                 |

### Back-end :coffee:

| Technology                                      | Description                                                                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Strapi**](https://strapi.io)                 | Strapi is a headless CMS used to develop websites, mobile applications, eCommerce sites, and APIs. It allows you to create an API without knowing anything about the backend or databases.           |
| [**MySQL**](https://www.mysql.com/)             | A relational database management system.

### DevOps :building_construction:

| Technology                                      | Description                                                                                                                                                      |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**Docker**](https://www.docker.com/)                 | Design APIs fast, manage Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.           |



