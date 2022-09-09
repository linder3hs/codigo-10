# Primer dia con Git/Github

Lista de comando de git

* Para poder ver la version de Git

```bash
git --version
```

* Para configurar el correo

```bash
git config --global user.email "email"
```

* Para poder configurar el username

```bash
git config --global user.name "username"
```

* Sirve para poder empezar a usar el control de version (git) en
nuestra carpeta.

* Esto solo se una vez por carpeta

```bash
git init
```

* Para ver el estado de nuestros cambios
  
```bash
git status
```

* Agrega los archiv a la memoria de la pc

```bash
git add . 
```

* Crear el registro de los cambios realizados

```bash
git commit -m "comentario"
````

* Poder ver historial de commits

[ ] Git log retorna un `id` con este id vamos
a poder ver el detalle de los cambios que se
hicieron en ese commit.

```bash
git log
```

* Para poder ver el detalle del commit usamos
  
```bash
git show id-de-commit
```

```bash
git push origin main
```
