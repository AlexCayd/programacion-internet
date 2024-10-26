<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="contenedor">
        <h1>Aproximación a Pi</h1>

        <nav>
            <a href="index.html">Regresar al Menú</a>
        </nav>
        <br> <br>

        <form action="pi.php" method="GET">
            <label for="iteracionpi">Número de iteraciones:</label>
            <input type="number" name="iteracionpi" id="iteracionpi">
            <button type="submit">Calcular</button>
        </form>

        <br>

        <h3>Iteración a considerar: <?php echo isset($_GET["iteracionpi"]) ? $_GET["iteracionpi"] : 0; ?></h3>
        <h4>Resultado: </h4>

        <table>
            <thead>
                <tr>
                    <th>Número de iteración (n)</th>
                    <th>Resultado (x)</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    if (isset($_GET["iteracionpi"])) {
                        $iteracion = (int)$_GET["iteracionpi"];
                        $resultado = 0;
                        for ($i = 0; $i <= $iteracion; $i++) {
                            $resultado += (4 * pow(-1, $i)) / (2 * $i + 1);
                            echo "<tr><td>$i</td><td>$resultado</td></tr>";
                        }
                    } else {
                        echo "<tr><td>0</td><td>0</td></tr>";
                    }
                ?>
            </tbody>
        </table>
    </div>

</body>
</html>