<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Practica 8</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap" rel="stylesheet">
    <style>
        * {
            font-family: "SUSE", sans-serif;
        }

        .contenedor {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
        }

        h1 {
            font-size: 64px;
        }

        a {
            text-decoration: none;
            margin-top: 20px;
            padding: 25px;
            font-size: 28px;
            color: black;
            transition: 0.5s all;
        }

        a:hover {
            color: #1d3557;
            font-weight: bold;
        }

        thead tr {
            background-color: #1d3557;
            color: #f1faee;
        }

        thead th {
            padding: 15px;
        }

        tbody tr {
            color: #1d3557;
            font-weight: bold;
        }

        tbody tr:nth-child(1), 
        tbody tr:nth-child(4),
        tbody tr:nth-child(7), 
        tbody tr:nth-child(10) {
            background-color: #457b9d;
            color: #f1faee;
        }

        tbody tr:nth-child(2), 
        tbody tr:nth-child(5),
        tbody tr:nth-child(8){
            background-color: #a8dadc;
        }

        tbody tr:nth-child(3), 
        tbody tr:nth-child(6),
        tbody tr:nth-child(9) {
            background-color: #f1faee;
        }

        tbody td {
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="contenedor">
        <h1>Autos</h1>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Modelo</th>
                    <th>Usuario</th>
                    <th>Folio</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    include ("conexion.php");

                    // Query 
                    $sql = "SELECT compra.id, modelo.nombre AS nombreModelo, usuarios.nombre AS nombreUsuario, compra.folio 
                            FROM compra
                            INNER JOIN modelo ON compra.idModelo = modelo.id
                            INNER JOIN usuarios ON compra.idUsuario = usuarios.id ORDER BY compra.id;";
                    $result = mysqli_query($con,$sql);

                    mysqli_close($con);
                ?>

                <?php
                    while($row = mysqli_fetch_array($result)) {
                        echo "<tr>";
                        echo "<td>" . $row['id'] . "</td>";
                        echo "<td>" . $row['nombreModelo'] . "</td>";
                        echo "<td>" . $row['nombreUsuario'] . "</td>";
                        echo "<td>" . $row['folio'] . "</td>";
                        echo "</tr>";
                    }
                ?>
                
            </tbody>
        </table>    
    </div>
</body>
</html>