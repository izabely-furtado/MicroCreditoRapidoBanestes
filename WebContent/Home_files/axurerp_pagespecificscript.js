for(var i = 0; i < 17; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});

widgetIdToShowFunction['u5'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u5', 'pd0u5','none','',500,'none','',500);

}

}
gv_vAlignTable['u13'] = 'top';u12.tabIndex = 0;

u12.style.cursor = 'pointer';
$axure.eventManager.click('u12', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Proposta.html');

}
});
gv_vAlignTable['u12'] = 'top';gv_vAlignTable['u4'] = 'center';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u9'] = 'top';document.getElementById('u14_img').tabIndex = 0;

u14.style.cursor = 'pointer';
$axure.eventManager.click('u14', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('Simular.html');

}
});
gv_vAlignTable['u15'] = 'center';u16.tabIndex = 0;

u16.style.cursor = 'pointer';
$axure.eventManager.click('u16', function(e) {

if (true) {

	SetPanelState('u5', 'pd1u5','none','',500,'none','',500);

}
});
gv_vAlignTable['u16'] = 'top';gv_vAlignTable['u11'] = 'top';gv_vAlignTable['u7'] = 'center';