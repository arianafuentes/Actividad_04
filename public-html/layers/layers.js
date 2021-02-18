var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tegicigalpa_1 = new ol.format.GeoJSON();
var features_Tegicigalpa_1 = format_Tegicigalpa_1.readFeatures(json_Tegicigalpa_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tegicigalpa_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tegicigalpa_1.addFeatures(features_Tegicigalpa_1);
var lyr_Tegicigalpa_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tegicigalpa_1, 
                style: style_Tegicigalpa_1,
                interactive: true,
                title: '<img src="styles/legend/Tegicigalpa_1.png" /> Tegicigalpa'
            });
var format_supermercados_tegucigalpa_2 = new ol.format.GeoJSON();
var features_supermercados_tegucigalpa_2 = format_supermercados_tegucigalpa_2.readFeatures(json_supermercados_tegucigalpa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_supermercados_tegucigalpa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_supermercados_tegucigalpa_2.addFeatures(features_supermercados_tegucigalpa_2);
var lyr_supermercados_tegucigalpa_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_supermercados_tegucigalpa_2, 
                style: style_supermercados_tegucigalpa_2,
                interactive: true,
                title: '<img src="styles/legend/supermercados_tegucigalpa_2.png" /> supermercados_tegucigalpa'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Tegicigalpa_1.setVisible(true);lyr_supermercados_tegucigalpa_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Tegicigalpa_1,lyr_supermercados_tegucigalpa_2];
lyr_Tegicigalpa_1.set('fieldAliases', {'id': 'id', });
lyr_supermercados_tegucigalpa_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_Tegicigalpa_1.set('fieldImages', {'id': '', });
lyr_supermercados_tegucigalpa_2.set('fieldImages', {'OID_': '', 'Name': '', 'FolderPath': '', 'SymbolID': '', 'AltMode': '', 'Base': '', 'Snippet': '', 'PopupInfo': '', 'HasLabel': '', 'LabelID': '', });
lyr_Tegicigalpa_1.set('fieldLabels', {'id': 'no label', });
lyr_supermercados_tegucigalpa_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_supermercados_tegucigalpa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});