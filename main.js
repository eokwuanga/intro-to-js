<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <script>
      var nameString = function (name) {
        return " " + "Hi, My name is" + " " + name + ",";
      };
      var name = nameString("Emmanuel");
      nameString("Emmanuel");
      document.write(name);

      var heightString = function (height) {
        return " " + "I am" + " " + height + " " + "tall,";
      };
      var height = heightString("182cm");
      heightString("182cm");
      document.write(height);

      var countryString = function (country) {
        return " " + "and I am from" + " " + country;
      };
      var country = countryString("Nigeria");
      countryString("Nigeria");
      document.write(country);
    </script>
  </body>
</html>
