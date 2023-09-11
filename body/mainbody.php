<?php
    global $mainStrMain,$mainStrKey,$mainLi1,$mainLi2,$mainStrDes,$mainStrH1,$mainStrH2,$mainArrCol,$mainArrDes;
?>

<p>&emsp;<?php echo $mainStrMain ?></p>
<br>
<p><b><?php echo $mainStrKey ?></b></p>
<ol>
    <li><?php echo $mainLi1 ?></li>
    <li><?php echo $mainLi2 ?></li>
</ol>
<br>
<p><b><?php echo $mainStrDes ;?></b></p>
<table style="width:100%;">
    <thead>
    <tr>
        <th class="px-1" style="width:20%;" ><?php echo $mainStrH1 ?></th>
        <th class="px-1" style="width:80%;" ><?php echo $mainStrH2 ?></th>
    </tr>
    </thead>
    <tbody>
    <?php 
        for ($x = 0;$x < 11;$x++)
        {
            echo"<tr><td class='px-1' >$mainArrCol[$x]</td><td class='px-1' >$mainArrDes[$x]</td></tr>";
        }
    ?>
    </tbody>
</table>
<div class="container">
    <div class="row">
        <canvas id="chartPlaceCon" class="col" style="max-width: 50%;max-height: 250px;"></canvas>
        <canvas id="chartPlaceYear" class="col" style="max-width: 50%;max-height: 250px;"></canvas>
        <canvas id="createChartLen" class="col" style="max-width: 50%;max-height: 250px;"></canvas>
        <canvas id="chartPlaceSou" class="col" style="max-width: 50%;max-height: 250px;"></canvas>
        <canvas id="chartPlaceSub" class="col" style="max-width: 50%;max-height: 250px;"></canvas>
        <canvas id="chartPlaceAut" class="col" style="max-width: 50%;max-height: 250px;"></canvas>
    </div>
</div>

 