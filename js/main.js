/**
 * @author slowsay
 * 1e2=100
 * !1=false
 */
var _wid=0,_hei=0,speeds=1;var allpng=[];var alljs=[{name:"TweenMax",path:"js/lib/TweenMax.min.js"},{name:"common",path:"js/utils/common.js"},{name:"drawbox",path:"js/drawbox.js"},{name:"pixi",path:"js/lib/pixi.js"}];var customer=[{x:417,y:399}];var dot_data=[{x:638,y:689},{x:588,y:702},{x:585,y:628},{x:682,y:639},{x:706,y:624},{x:662,y:606},{x:707,y:591},{x:744,y:558},{x:727,y:489},{x:747,y:478},{x:573,y:589},{x:593,y:534},{x:783,y:412},{x:556,y:458},{x:686,y:415},{x:561,y:412},{x:510,y:383},{x:531,y:405},{x:511,y:347},{x:469,y:398},{x:417,y:399},{x:341,y:338},{x:357,y:285},{x:336,y:255},{x:379,y:210},{x:453,y:198},{x:427,y:151},{x:452,y:123},{x:449,y:80},{x:522,y:144},{x:617,y:133},{x:680,y:213},{x:618,y:259},{x:712,y:252},{x:724,y:245},{x:719,y:207},{x:785,y:254},{x:788,y:285},{x:758,y:301},{x:726,y:284},{x:796,y:329},{x:771,y:325},{x:774,y:345},{x:463,y:36},{x:248,y:65},{x:196,y:126},{x:57,y:280},{x:58,y:351},{x:73,y:385},{x:57,y:520},{x:127,y:461},{x:107,y:422},{x:198,y:492},{x:173,y:579},{x:133,y:611},{x:248,y:726},{x:308,y:667},{x:419,y:672},{x:462,y:778},{x:252,y:802},{x:112,y:141},{x:27,y:280},{x:9,y:352},{x:2,y:415},{x:10,y:516},{x:59,y:631},{x:116,y:709},{x:147,y:731},{x:353,y:827},{x:509,y:823},{x:579,y:802},{x:692,y:732},{x:771,y:646},{x:822,y:526},{x:834,y:444},{x:814,y:289},{x:790,y:231},{x:700,y:111},{x:637,y:62},{x:458,y:2},{x:340,y:8},{x:217,y:54}];var triangle=[[{x:112,y:141},{x:27,y:280},{x:57,y:280}],[{x:27,y:280},{x:9,y:352},{x:58,y:351}],[{x:27,y:280},{x:58,y:351},{x:57,y:280}],[{x:9,y:352},{x:2,y:415},{x:58,y:351}],[{x:58,y:351},{x:2,y:415},{x:73,y:385}],[{x:73,y:385},{x:57,y:520},{x:107,y:422}],[{x:2,y:415},{x:10,y:516},{x:57,y:520}],[{x:107,y:422},{x:57,y:520},{x:127,y:461}],[{x:10,y:516},{x:59,y:631},{x:57,y:520}],[{x:2,y:415},{x:57,y:520},{x:73,y:385}],[{x:57,y:520},{x:59,y:631},{x:133,y:611}],[{x:127,y:461},{x:57,y:520},{x:133,y:611}],[{x:127,y:461},{x:133,y:611},{x:198,y:492}],[{x:198,y:492},{x:133,y:611},{x:173,y:579}],[{x:133,y:611},{x:59,y:631},{x:116,y:709}],[{x:133,y:611},{x:116,y:709},{x:147,y:731}],[{x:133,y:611},{x:173,y:579},{x:248,y:726}],[{x:133,y:611},{x:147,y:731},{x:248,y:726}],[{x:198,y:492},{x:173,y:579},{x:248,y:726}],[{x:248,y:726},{x:308,y:667},{x:198,y:492}],[{x:308,y:667},{x:248,y:726},{x:419,y:672}],[{x:147,y:731},{x:252,y:802},{x:248,y:726}],[{x:248,y:726},{x:353,y:827},{x:252,y:802}],[{x:248,y:726},{x:353,y:827},{x:419,y:672}],[{x:419,y:672},{x:462,y:778},{x:353,y:827}],[{x:353,y:827},{x:509,y:823},{x:462,y:778}],[{x:462,y:778},{x:579,y:802},{x:509,y:823}],[{x:112,y:141},{x:217,y:54},{x:196,y:126}],[{x:196,y:126},{x:248,y:65},{x:217,y:54}],[{x:217,y:54},{x:248,y:65},{x:340,y:8}],[{x:340,y:8},{x:449,y:80},{x:463,y:36}],[{x:463,y:36},{x:340,y:8},{x:458,y:2}],[{x:458,y:2},{x:463,y:36},{x:637,y:62}],[{x:637,y:62},{x:617,y:133},{x:463,y:36}],[{x:463,y:36},{x:449,y:80},{x:617,y:133}],[{x:449,y:80},{x:522,y:144},{x:617,y:133}],[{x:637,y:62},{x:617,y:133},{x:700,y:111}],[{x:617,y:133},{x:680,y:213},{x:700,y:111}],[{x:700,y:111},{x:719,y:207},{x:680,y:213}],[{x:700,y:111},{x:790,y:231},{x:719,y:207}],[{x:719,y:207},{x:680,y:213},{x:724,y:245}],[{x:719,y:207},{x:785,y:254},{x:790,y:231}],[{x:719,y:207},{x:724,y:245},{x:788,y:285}],[{x:788,y:285},{x:785,y:254},{x:719,y:207}],[{x:788,y:285},{x:771,y:325},{x:758,y:301}],[{x:758,y:301},{x:724,y:245},{x:788,y:285}],[{x:680,y:213},{x:618,y:259},{x:712,y:252}],[{x:618,y:259},{x:726,y:284},{x:712,y:252}],[{x:726,y:284},{x:774,y:345},{x:686,y:415}],[{x:686,y:415},{x:618,y:259},{x:726,y:284}],[{x:686,y:415},{x:783,y:412},{x:727,y:489}],[{x:796,y:329},{x:774,y:345},{x:783,y:412}],[{x:783,y:412},{x:686,y:415},{x:774,y:345}],[{x:783,y:412},{x:727,y:489},{x:747,y:478}],[{x:747,y:478},{x:744,y:558},{x:727,y:489}],[{x:727,y:489},{x:707,y:591},{x:744,y:558}],[{x:707,y:591},{x:662,y:606},{x:727,y:489}],[{x:727,y:489},{x:593,y:534},{x:662,y:606}],[{x:662,y:606},{x:573,y:589},{x:593,y:534}],[{x:573,y:589},{x:585,y:628},{x:662,y:606}],[{x:662,y:606},{x:588,y:702},{x:585,y:628}],[{x:588,y:702},{x:638,y:689},{x:662,y:606}],[{x:662,y:606},{x:638,y:689},{x:682,y:639}],[{x:682,y:639},{x:706,y:624},{x:662,y:606}],[{x:662,y:606},{x:707,y:591},{x:706,y:624}],[{x:449,y:80},{x:452,y:123},{x:522,y:144}],[{x:522,y:144},{x:452,y:123},{x:427,y:151}],[{x:427,y:151},{x:453,y:198},{x:522,y:144}],[{x:427,y:151},{x:379,y:210},{x:453,y:198}],[{x:453,y:198},{x:357,y:285},{x:379,y:210}],[{x:379,y:210},{x:336,y:255},{x:357,y:285}],[{x:357,y:285},{x:341,y:338},{x:336,y:255}],[{x:341,y:338},{x:417,y:399},{x:357,y:285}],[{x:357,y:285},{x:417,y:399},{x:453,y:198}],[{x:453,y:198},{x:511,y:347},{x:417,y:399}],[{x:453,y:198},{x:522,y:144},{x:618,y:259}],[{x:618,y:259},{x:511,y:347},{x:453,y:198}],[{x:522,y:144},{x:618,y:259},{x:617,y:133}],[{x:617,y:133},{x:680,y:213},{x:618,y:259}],[{x:511,y:347},{x:417,y:399},{x:469,y:398}],[{x:469,y:398},{x:510,y:383},{x:511,y:347}],[{x:531,y:405},{x:618,y:259},{x:561,y:412}],[{x:561,y:412},{x:686,y:415},{x:618,y:259}],[{x:561,y:412},{x:556,y:458},{x:686,y:415}],[{x:686,y:415},{x:593,y:534},{x:727,y:489}],[{x:510,y:383},{x:618,y:259},{x:531,y:405}],[{x:511,y:347},{x:510,y:383},{x:618,y:259}],[{x:556,y:458},{x:593,y:534},{x:686,y:415}]];
var triangleOther=[{x:579,y:802},{x:692,y:732},{x:771,y:646},{x:822,y:526},{x:834,y:444},{x:814,y:289},{x:790,y:231}];var brandxy=[{x:58,y:351},{x:57,y:520},{x:127,y:461},{x:198,y:492},{x:133,y:611},{x:248,y:726},{x:419,y:672},{x:662,y:606},{x:727,y:489},{x:593,y:534},{x:686,y:415},{x:511,y:347},{x:357,y:285},{x:453,y:198},{x:522,y:144},{x:617,y:133},{x:680,y:213},{x:618,y:259},{x:463,y:36},{x:196,y:126}];
$(function() {
	//init
	Fileloader.load(alljs, function(e) {
		Drawbox.init();
	});

});
