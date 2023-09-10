<?php
    global $searchStrCon,$searchStrCal,$searchStrOpa,$searchStrData,$searchStrDel,$searchButtonAdd,$searchButtonSearch,$searchVarLike,$searchVarEqu,$searchVarNot,$searchVarLess,$searchVarMore,$searchVarLessEqu,$searchVarMoreEqu;
?>

<script>
    var searchStrCon = <?php echo json_encode($searchStrCon); ?>;
    var searchStrCal = <?php echo json_encode($searchStrCal); ?>;
    var searchStrOpa = <?php echo json_encode($searchStrOpa); ?>;
    var searchStrData = <?php echo json_encode($searchStrData); ?>;
    var searchStrDel = <?php echo json_encode($searchStrDel); ?>;
    var searchVarLike = <?php echo json_encode($searchVarLike); ?>;
    var searchVarEqu = <?php echo json_encode($searchVarEqu); ?>;
    var searchVarNot = <?php echo json_encode($searchVarNot); ?>;
    var searchVarLess = <?php echo json_encode($searchVarLess); ?>;
    var searchVarMore = <?php echo json_encode($searchVarMore); ?>;
    var searchVarLessEqu = <?php echo json_encode($searchVarLessEqu); ?>;
    var searchVarMoreEqu = <?php echo json_encode($searchVarMoreEqu); ?>;
</script>

<div id="divsearch">

</div>
<div id="rowbutton" style=" width: 100%; height: 50px; margin: 4px;">
    <button id="buttonadd" class="border-1" style="margin-left: 25%;" ><?php echo $searchButtonAdd ?>
        <i class="bi bi-plus-lg"></i>
    </button>
    <button id="buttonsearch" class="border-1" style="margin-right: 25%; float: right; " ><?php echo $searchButtonSearch ?>
        <i class="bi bi-search"></i>
    </button>
</div>

<table id="mytablesearch" style="overflow: auto;">
    <thead>
        <tr>
            <th>Number</th>
            <th>Sequence</th>
            <th>Length</th>
            <th>IC50</th>
            <th>Name</th>
            <th>Source</th>
            <th>Substratre/enz</th>
            <th>Reported Year</th>
            <th>Author(Year)</th>
            <th>DOI</th>
            <th>SMILES</th>
            <th>Note</th>
            <th>3D Structure</th>          
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>
<div class="position-absolute top-50 start-50 translate-middle">
  <p id="loading">Loading ...</p>
</div>

