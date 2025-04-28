### 1. Создать нового пользователя (роль):
CREATE ROLE имя_пользователя WITH LOGIN PASSWORD 'пароль';

Пример:
CREATE ROLE new_owner WITH LOGIN PASSWORD 'strongpassword';

2. Сделать пользователя владельцем базы данных (передать права на БД):
Если у тебя уже есть пользователь, и ты хочешь передать права на базу данных, используем:
ALTER DATABASE имя_базы OWNER TO имя_пользователя;

Пример:
ALTER DATABASE my_database OWNER TO new_owner;

3. Чтобы у пользователя были права на создание таблиц и т.д., можно дать дополнительные привилегии:
ALTER ROLE имя_пользователя CREATEDB;
ALTER ROLE имя_пользователя CREATEROLE;

или сразу сделать его суперпользователем (будь осторожен):
ALTER ROLE имя_пользователя SUPERUSER;