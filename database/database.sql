CREATE DATABASE Brandfolder;


CREATE TABLE vehiculos (
id SERIAL PRIMARY KEY,
marca VARCHAR (30),
modelo VARCHAR(30),
concecionario SMALLINT)


INSERT INTO vehiculos (marca, modelo, concesionario)
VALUES
  ('Toyota', 'Corolla', 1),
  ('Honda', 'Civic', 2),
  ('Ford', 'Mustang', 1),
  ('Chevrolet', 'Camaro', 2),
  ('Volkswagen', 'Golf', 1),
  ('BMW', 'X5', 2),
  ('Mercedes-Benz', 'C-Class', 1),
  ('Audi', 'A4', 2),
  ('Nissan', 'Sentra', 1),
  ('Hyundai', 'Elantra', 2),
  ('Mazda', 'CX-5', 1),
  ('Subaru', 'Impreza', 2),
  ('Kia', 'Sportage', 1),
  ('Lexus', 'RX', 2),
  ('Volvo', 'XC90', 1),
  ('Tesla', 'Model 3', 2),
  ('Ferrari', '458 Italia', 1),
  ('Lamborghini', 'Huracán', 2),
  ('Porsche', '911', 1),
  ('Jaguar', 'F-Type', 2),
  ('Land Rover', 'Range Rover', 1),
  ('Jeep', 'Wrangler', 2),
  ('Chrysler', '300', 1),
  ('Maserati', 'Quattroporte', 2),
  ('Alfa Romeo', 'Giulia', 1),
  ('Renault', 'Clio', 2),
  ('Peugeot', '308', 1),
  ('Citroën', 'C3', 2),
  ('Seat', 'León', 1),
  ('Skoda', 'Octavia', 2);




