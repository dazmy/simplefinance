<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>tes sahaja</title>
</head>
<body>
    <h1>{{ $title }}</h1>
    <p>{{ $date }}</p>
    <table>
        <tr>
            <th>tanggal</th>
            <th>pemasukan</th>
            <th>pengeluaran</th>
            <th>saldo</th>
        </tr>
        @foreach ($content as $item)
            <tr>
                <td>{{ $item->tanggal }}</td>
                <td>{{ $item->pemasukan }}</td>
                <td>{{ $item->pengeluaran }}</td>
                <td>{{ $item->saldo }}</td>
            </tr>
        @endforeach
    </table>
</body>
</html>