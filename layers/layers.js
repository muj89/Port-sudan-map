var wms_layers = [];

var format_bder_al_kobra_no_jon_0 = new ol.format.GeoJSON();
var features_bder_al_kobra_no_jon_0 = format_bder_al_kobra_no_jon_0.readFeatures(json_bder_al_kobra_no_jon_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bder_al_kobra_no_jon_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bder_al_kobra_no_jon_0.addFeatures(features_bder_al_kobra_no_jon_0);
var lyr_bder_al_kobra_no_jon_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bder_al_kobra_no_jon_0, 
                style: style_bder_al_kobra_no_jon_0,
                popuplayertitle: 'bder_al_kobra_no_jon',
                interactive: true,
    title: 'bder_al_kobra_no_jon<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_0.png" /> 1-1<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_1.png" /> 1-2<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_2.png" /> 1-3<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_3.png" /> 1-4<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_4.png" /> 1-5<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_5.png" /> 1-6<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_6.png" /> 1-7<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_7.png" /> 2-1<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_8.png" /> 2-2<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_9.png" /> 2-3<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_10.png" /> 2-4<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_11.png" /> 2-5<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_12.png" /> 2-6<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_13.png" /> 2-7<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_14.png" /> 2-8<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_15.png" /> 2-9<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_16.png" /> 3-1<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_17.png" /> 3-2<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_18.png" /> 3-3<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_19.png" /> 3-4<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_20.png" /> 3-6<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_21.png" /> 3-7<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_22.png" /> 3-8<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_23.png" /> 3-9<br />\
    <img src="styles/legend/bder_al_kobra_no_jon_0_24.png" /> <br />' });

lyr_bder_al_kobra_no_jon_0.setVisible(true);
var layersList = [lyr_bder_al_kobra_no_jon_0];
lyr_bder_al_kobra_no_jon_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Entity': 'Entity', 'Handle': 'Handle', 'Owner': 'Owner', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrLock': 'LyrLock', 'LyrOn': 'LyrOn', 'LyrVPFrzn': 'LyrVPFrzn', 'LyrHandle': 'LyrHandle', 'Color': 'Color', 'EntColor': 'EntColor', 'LyrColor': 'LyrColor', 'BlkColor': 'BlkColor', 'Linetype': 'Linetype', 'EntLinetype': 'EntLinetype', 'LyrLnType': 'LyrLnType', 'BlkLinetype': 'BlkLinetype', 'Elevation': 'Elevation', 'Thickness': 'Thickness', 'LineWt': 'LineWt', 'EntLineWt': 'EntLineWt', 'LyrLineWt': 'LyrLineWt', 'BlkLineWt': 'BlkLineWt', 'RefName': 'RefName', 'LTScale': 'LTScale', 'ExtX': 'ExtX', 'ExtY': 'ExtY', 'ExtZ': 'ExtZ', 'DocName': 'DocName', 'DocPath': 'DocPath', 'DocType': 'DocType', 'DocVer': 'DocVer', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'ScaleX': 'ScaleX', 'ScaleY': 'ScaleY', 'ScaleZ': 'ScaleZ', 'Style': 'Style', 'FontID': 'FontID', 'Text': 'Text', 'Height': 'Height', 'TxtAngle': 'TxtAngle', 'TxtWidth': 'TxtWidth', 'TxtOblique': 'TxtOblique', 'TxtGenType': 'TxtGenType', 'TxtJust': 'TxtJust', 'VertAlign': 'VertAlign', 'TxtFont': 'TxtFont', 'TxtBoxHt': 'TxtBoxHt', 'TxtBoxWd': 'TxtBoxWd', 'TxtRefWd': 'TxtRefWd', 'TxtAttach': 'TxtAttach', 'TxtDir': 'TxtDir', 'LnSpace': 'LnSpace', 'SpaceFct': 'SpaceFct', 'TxtMemo': 'TxtMemo', 'Entity_1': 'Entity', 'Handle_1': 'Handle', 'Layer_1': 'Layer', 'LyrFrzn_1': 'LyrFrzn', 'LyrOn_1': 'LyrOn', 'Color_1': 'Color', 'Linetype_1': 'Linetype', 'Elevation_1': 'Elevation', 'LineWt_1': 'LineWt', 'RefName_1': 'RefName', 'DocUpdate_1': 'DocUpdate', 'DocId_1': 'DocId', 'Style_1': 'Style', 'Text_1': 'Text', 'TxtAngle_1': 'TxtAngle', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'class': 'class', 'block': 'block', 'list': 'list', });
lyr_bder_al_kobra_no_jon_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'Range', 'TARGET_FID': 'Range', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Owner': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'Range', 'LyrLock': 'Range', 'LyrOn': 'TextEdit', 'LyrVPFrzn': 'Range', 'LyrHandle': 'TextEdit', 'Color': 'Range', 'EntColor': 'Range', 'LyrColor': 'Range', 'BlkColor': 'Range', 'Linetype': 'TextEdit', 'EntLinetype': 'TextEdit', 'LyrLnType': 'TextEdit', 'BlkLinetype': 'TextEdit', 'Elevation': 'TextEdit', 'Thickness': 'TextEdit', 'LineWt': 'Range', 'EntLineWt': 'Range', 'LyrLineWt': 'Range', 'BlkLineWt': 'Range', 'RefName': 'TextEdit', 'LTScale': 'TextEdit', 'ExtX': 'TextEdit', 'ExtY': 'TextEdit', 'ExtZ': 'TextEdit', 'DocName': 'TextEdit', 'DocPath': 'TextEdit', 'DocType': 'TextEdit', 'DocVer': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'ScaleX': 'TextEdit', 'ScaleY': 'TextEdit', 'ScaleZ': 'TextEdit', 'Style': 'TextEdit', 'FontID': 'Range', 'Text': 'TextEdit', 'Height': 'TextEdit', 'TxtAngle': 'TextEdit', 'TxtWidth': 'TextEdit', 'TxtOblique': 'TextEdit', 'TxtGenType': 'TextEdit', 'TxtJust': 'TextEdit', 'VertAlign': 'TextEdit', 'TxtFont': 'TextEdit', 'TxtBoxHt': 'TextEdit', 'TxtBoxWd': 'TextEdit', 'TxtRefWd': 'TextEdit', 'TxtAttach': 'Range', 'TxtDir': 'Range', 'LnSpace': 'Range', 'SpaceFct': 'TextEdit', 'TxtMemo': 'TextEdit', 'Entity_1': 'TextEdit', 'Handle_1': 'TextEdit', 'Layer_1': 'TextEdit', 'LyrFrzn_1': 'Range', 'LyrOn_1': 'TextEdit', 'Color_1': 'Range', 'Linetype_1': 'TextEdit', 'Elevation_1': 'TextEdit', 'LineWt_1': 'Range', 'RefName_1': 'TextEdit', 'DocUpdate_1': 'DateTime', 'DocId_1': 'TextEdit', 'Style_1': 'TextEdit', 'Text_1': 'TextEdit', 'TxtAngle_1': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'class': 'TextEdit', 'block': 'TextEdit', 'list': 'Range', });
lyr_bder_al_kobra_no_jon_0.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Owner': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrLock': 'no label', 'LyrOn': 'no label', 'LyrVPFrzn': 'no label', 'LyrHandle': 'no label', 'Color': 'no label', 'EntColor': 'no label', 'LyrColor': 'no label', 'BlkColor': 'no label', 'Linetype': 'no label', 'EntLinetype': 'no label', 'LyrLnType': 'no label', 'BlkLinetype': 'no label', 'Elevation': 'no label', 'Thickness': 'no label', 'LineWt': 'no label', 'EntLineWt': 'no label', 'LyrLineWt': 'no label', 'BlkLineWt': 'no label', 'RefName': 'no label', 'LTScale': 'no label', 'ExtX': 'no label', 'ExtY': 'no label', 'ExtZ': 'no label', 'DocName': 'no label', 'DocPath': 'no label', 'DocType': 'no label', 'DocVer': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'ScaleX': 'no label', 'ScaleY': 'no label', 'ScaleZ': 'no label', 'Style': 'no label', 'FontID': 'no label', 'Text': 'no label', 'Height': 'no label', 'TxtAngle': 'no label', 'TxtWidth': 'no label', 'TxtOblique': 'no label', 'TxtGenType': 'no label', 'TxtJust': 'no label', 'VertAlign': 'no label', 'TxtFont': 'no label', 'TxtBoxHt': 'no label', 'TxtBoxWd': 'no label', 'TxtRefWd': 'no label', 'TxtAttach': 'no label', 'TxtDir': 'no label', 'LnSpace': 'no label', 'SpaceFct': 'no label', 'TxtMemo': 'no label', 'Entity_1': 'no label', 'Handle_1': 'no label', 'Layer_1': 'no label', 'LyrFrzn_1': 'no label', 'LyrOn_1': 'no label', 'Color_1': 'no label', 'Linetype_1': 'no label', 'Elevation_1': 'no label', 'LineWt_1': 'no label', 'RefName_1': 'no label', 'DocUpdate_1': 'no label', 'DocId_1': 'no label', 'Style_1': 'no label', 'Text_1': 'no label', 'TxtAngle_1': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', 'class': 'no label', 'block': 'no label', 'list': 'no label', });
lyr_bder_al_kobra_no_jon_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});