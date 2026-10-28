//@ts-check


const addjson = {"content":{"0":{"type":"switchbutton","id":0,"x":-89.9739670999407,"y":-187.0017678819915,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[]},"1":{"type":"switchbutton","id":1,"x":-10.13943142764677,"y":-187.0017678819915,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[]},"2":{"type":"switchbutton","id":2,"x":79.45904026212196,"y":-186.427418704493,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[]},"3":{"type":"notgate","id":3,"x":23.5,"y":-44.5,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":3,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"4":{"type":"andgate","id":4,"x":-60.5,"y":-43,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":4,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"5":{"type":"andgate","id":5,"x":-30,"y":33.5,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":5,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}},{"superid":5,"id":1,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"6":{"type":"orgate","id":6,"x":-118.5,"y":-39.5,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":6,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":6,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"7":{"type":"andgate","id":7,"x":-87,"y":34,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}},{"superid":7,"id":1,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"8":{"type":"orgate","id":8,"x":-54,"y":102,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}},{"superid":8,"id":1,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"9":{"type":"xorgate","id":9,"x":108,"y":-49.5,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":9,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"10":{"type":"xorgate","id":10,"x":78.5,"y":6,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":10,"id":0,"type":"in","connected":{"superid":9,"id":0," type":"out"}},{"superid":10,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"12":{"type":"outputbulb","id":12,"x":-56.5,"y":160.5,"gpout":[],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"13":{"type":"outputbulb","id":13,"x":77,"y":160.5,"gpout":[],"gpin":[{"superid":13,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}}]}},"gatecount":14};


const CLAjson = {"content":{"0":{"type":"switchbutton","id":0,"x":136.11964020627326,"y":49.209432611014236,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"1":{"type":"switchbutton","id":1,"x":-37.700774984244774,"y":48.81258234802218,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"2":{"type":"upnode","id":2,"x":7.640307105246592,"y":559.9971558074716,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":2,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]},"3":{"type":"upnode","id":3,"x":41.14030710524659,"y":557.4971558074716,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":3,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"4":{"type":"andgate","id":4,"x":-6.240947674769615,"y":635.2458356535335,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}},{"superid":4,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"5":{"type":"xorgate","id":5,"x":46.05127386983912,"y":670.1073166832726,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":5,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}},{"superid":5,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"6":{"type":"switchbutton","id":6,"x":198.42513149602513,"y":49.209432611014236,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"7":{"type":"upnode","id":7,"x":115.22469399752882,"y":738.9533754163639,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"8":{"type":"andgate","id":8,"x":82.88142521841985,"y":799.9268261554015,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}},{"superid":8,"id":1,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"9":{"type":"orgate","id":9,"x":48.650309075271394,"y":969.069184169384,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}},{"superid":9,"id":1,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"10":{"type":"switchbutton","id":10,"x":101.59366732596487,"y":48.01888182203808,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"11":{"type":"switchbutton","id":11,"x":-71.43304733856905,"y":50.39998339999038,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"12":{"type":"upnode","id":12,"x":-261.99909873662466,"y":426.72929513840324,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"13":{"type":"upnode","id":13,"x":-228.4990987366247,"y":424.22929513840324,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":13,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}}]},"14":{"type":"andgate","id":14,"x":-289.67994561221417,"y":556.4285741949928,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":14,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}},{"superid":14,"id":1,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"15":{"type":"xorgate","id":15,"x":-208.5891093039078,"y":586.7429055252007,"gpout":[{"superid":15,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[{"superid":15,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}},{"superid":15,"id":1,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"16":{"type":"upnode","id":16,"x":-155.53902947604385,"y":692.8430651809286,"gpout":[{"superid":16,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":16,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"17":{"type":"upnode","id":17,"x":-90.28753771900497,"y":740.4006446538042,"gpout":[{"superid":17,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":17,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"18":{"type":"triandgate","id":18,"x":-162.65099959102392,"y":832.3022412312682,"gpout":[{"superid":18,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":18,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}},{"superid":18,"id":1,"type":"in","connected":{"superid":16,"id":0," type":"out"}},{"superid":18,"id":2,"type":"in","connected":{"superid":17,"id":0," type":"out"}}]},"19":{"type":"upnode","id":19,"x":-247.9977400331782,"y":646.6137099023615,"gpout":[{"superid":19,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":19,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"20":{"type":"andgate","id":20,"x":-218.3708652324785,"y":832.3022412312682,"gpout":[{"superid":20,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":20,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}},{"superid":20,"id":1,"type":"in","connected":{"superid":19,"id":0," type":"out"}}]},"21":{"type":"triorgate","id":21,"x":-235.73809608176308,"y":962.5564726009023,"gpout":[{"superid":21,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":21,"id":0,"type":"in","connected":{"superid":18,"id":0," type":"out"}},{"superid":21,"id":1,"type":"in","connected":{"superid":20,"id":0," type":"out"}},{"superid":21,"id":2,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"22":{"type":"upnode","id":22,"x":-403.6213276248469,"y":737.5061061789235,"gpout":[{"superid":22,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":22,"id":0,"type":"in","connected":{"superid":17,"id":0," type":"out"}}]},"23":{"type":"switchbutton","id":23,"x":69.84564628660085,"y":46.034630507077836,"gpout":[{"superid":23,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"24":{"type":"switchbutton","id":24,"x":-101.19681706297283,"y":50.39998339999038,"gpout":[{"superid":24,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"25":{"type":"upnode","id":25,"x":-533.8371371976754,"y":381.2879075811943,"gpout":[{"superid":25,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":25,"id":0,"type":"in","connected":{"superid":24,"id":0," type":"out"}}]},"26":{"type":"upnode","id":26,"x":-500.33713719767536,"y":378.7879075811943,"gpout":[{"superid":26,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":26,"id":0,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"27":{"type":"andgate","id":27,"x":-600.3298999635953,"y":486.19495098567666,"gpout":[{"superid":27,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":27,"id":0,"type":"in","connected":{"superid":26,"id":0," type":"out"}},{"superid":27,"id":1,"type":"in","connected":{"superid":25,"id":0," type":"out"}}]},"28":{"type":"xorgate","id":28,"x":-485.13544090880487,"y":526.3614399982022,"gpout":[{"superid":28,"id":0,"type":"out","connected":[{},{},{},{},{}]}],"gpin":[{"superid":28,"id":0,"type":"in","connected":{"superid":26,"id":0," type":"out"}},{"superid":28,"id":1,"type":"in","connected":{"superid":25,"id":0," type":"out"}}]},"29":{"type":"upnode","id":29,"x":-428.29606966466497,"y":686.2695377650492,"gpout":[{"superid":29,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":29,"id":0,"type":"in","connected":{"superid":16,"id":0," type":"out"}}]},"30":{"type":"upnode","id":30,"x":-526.8176464878409,"y":599.8736934739566,"gpout":[{"superid":30,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":30,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}}]},"31":{"type":"andgate","id":31,"x":-422.23320339862335,"y":794.6432722705428,"gpout":[{"superid":31,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":31,"id":0,"type":"in","connected":{"superid":22,"id":0," type":"out"}},{"superid":31,"id":1,"type":"in","connected":{"superid":29,"id":0," type":"out"}}]},"32":{"type":"andgate","id":32,"x":-469.22041696044573,"y":797.6747054035636,"gpout":[{"superid":32,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":32,"id":0,"type":"in","connected":{"superid":28,"id":0," type":"out"}},{"superid":32,"id":1,"type":"in","connected":{"superid":30,"id":0," type":"out"}}]},"33":{"type":"andgate","id":33,"x":-451.031818162321,"y":864.3662343300211,"gpout":[{"superid":33,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":33,"id":0,"type":"in","connected":{"superid":31,"id":0," type":"out"}},{"superid":33,"id":1,"type":"in","connected":{"superid":32,"id":0," type":"out"}}]},"34":{"type":"upnode","id":34,"x":-559.4055526678145,"y":646.1030487525237,"gpout":[{"superid":34,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":34,"id":0,"type":"in","connected":{"superid":19,"id":0," type":"out"}}]},"35":{"type":"triandgate","id":35,"x":-529.8490796208617,"y":803.7375716696052,"gpout":[{"superid":35,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":35,"id":0,"type":"in","connected":{"superid":34,"id":0," type":"out"}},{"superid":35,"id":1,"type":"in","connected":{"superid":30,"id":0," type":"out"}},{"superid":35,"id":2,"type":"in","connected":{"superid":28,"id":0," type":"out"}}]},"36":{"type":"upnode","id":36,"x":-570.7734269166425,"y":561.2229210279414,"gpout":[{"superid":36,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":36,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"37":{"type":"andgate","id":37,"x":-578.79536806268,"y":807.9462888374693,"gpout":[{"superid":37,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":37,"id":0,"type":"in","connected":{"superid":28,"id":0," type":"out"}},{"superid":37,"id":1,"type":"in","connected":{"superid":36,"id":0," type":"out"}}]},"38":{"type":"orgate","id":38,"x":-600.6206368076237,"y":894.098665462247,"gpout":[{"superid":38,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":38,"id":0,"type":"in","connected":{"superid":37,"id":0," type":"out"}},{"superid":38,"id":1,"type":"in","connected":{"superid":27,"id":0," type":"out"}}]},"39":{"type":"orgate","id":39,"x":-483.6197243422945,"y":959.8563780201763,"gpout":[{"superid":39,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":39,"id":0,"type":"in","connected":{"superid":33,"id":0," type":"out"}},{"superid":39,"id":1,"type":"in","connected":{"superid":35,"id":0," type":"out"}}]},"40":{"type":"upnode","id":40,"x":-722.9139237777416,"y":736.0823630987691,"gpout":[{"superid":40,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":40,"id":0,"type":"in","connected":{"superid":22,"id":0," type":"out"}}]},"41":{"type":"switchbutton","id":41,"x":39.68502629920503,"y":53.97163576691884,"gpout":[{"superid":41,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"42":{"type":"switchbutton","id":42,"x":-136.5164904692653,"y":49.209432611014236,"gpout":[{"superid":42,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"43":{"type":"upnode","id":43,"x":-872.8371371976756,"y":302.2879075811943,"gpout":[{"superid":43,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":43,"id":0,"type":"in","connected":{"superid":42,"id":0," type":"out"}}]},"44":{"type":"upnode","id":44,"x":-839.3371371976756,"y":299.7879075811943,"gpout":[{"superid":44,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":44,"id":0,"type":"in","connected":{"superid":41,"id":0," type":"out"}}]},"45":{"type":"andgate","id":45,"x":-985.8005950510782,"y":409.0921771470812,"gpout":[{"superid":45,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":45,"id":0,"type":"in","connected":{"superid":44,"id":0," type":"out"}},{"superid":45,"id":1,"type":"in","connected":{"superid":43,"id":0," type":"out"}}]},"46":{"type":"xorgate","id":46,"x":-824.1354409088052,"y":447.3614399982022,"gpout":[{"superid":46,"id":0,"type":"out","connected":[{},{},{},{},{}]}],"gpin":[{"superid":46,"id":0,"type":"in","connected":{"superid":44,"id":0," type":"out"}},{"superid":46,"id":1,"type":"in","connected":{"superid":43,"id":0," type":"out"}}]},"47":{"type":"upnode","id":47,"x":-735.0667318726149,"y":672.3106069325019,"gpout":[{"superid":47,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":47,"id":0,"type":"in","connected":{"superid":29,"id":0," type":"out"}}]},"48":{"type":"upnode","id":48,"x":-763.0667318726149,"y":598.3106069325017,"gpout":[{"superid":48,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":48,"id":0,"type":"in","connected":{"superid":30,"id":0," type":"out"}}]},"49":{"type":"upnode","id":49,"x":-789.0667318726149,"y":543.3106069325017,"gpout":[{"superid":49,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":49,"id":0,"type":"in","connected":{"superid":28,"id":0," type":"out"}}]},"50":{"type":"triandgate","id":50,"x":-748.0667318726148,"y":813.3106069325019,"gpout":[{"superid":50,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":50,"id":0,"type":"in","connected":{"superid":48,"id":0," type":"out"}},{"superid":50,"id":1,"type":"in","connected":{"superid":47,"id":0," type":"out"}},{"superid":50,"id":2,"type":"in","connected":{"superid":40,"id":0," type":"out"}}]},"51":{"type":"andgate","id":51,"x":-808.0667318726149,"y":816.3106069325019,"gpout":[{"superid":51,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":51,"id":0,"type":"in","connected":{"superid":49,"id":0," type":"out"}},{"superid":51,"id":1,"type":"in","connected":{"superid":46,"id":0," type":"out"}}]},"52":{"type":"andgate","id":52,"x":-778.0667318726148,"y":898.3106069325019,"gpout":[{"superid":52,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":52,"id":0,"type":"in","connected":{"superid":50,"id":0," type":"out"}},{"superid":52,"id":1,"type":"in","connected":{"superid":51,"id":0," type":"out"}}]},"54":{"type":"triandgate","id":54,"x":-857.92906832696,"y":758.5522595725967,"gpout":[{"superid":54,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":54,"id":0,"type":"in","connected":{"superid":46,"id":0," type":"out"}},{"superid":54,"id":1,"type":"in","connected":{"superid":49,"id":0," type":"out"}},{"superid":54,"id":2,"type":"in","connected":{"superid":48,"id":0," type":"out"}}]},"55":{"type":"upnode","id":55,"x":-895.8361140418618,"y":644.8311224278901,"gpout":[{"superid":55,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":55,"id":0,"type":"in","connected":{"superid":34,"id":0," type":"out"}}]},"56":{"type":"andgate","id":56,"x":-870.564750231927,"y":852.7455246823537,"gpout":[{"superid":56,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":56,"id":0,"type":"in","connected":{"superid":54,"id":0," type":"out"}},{"superid":56,"id":1,"type":"in","connected":{"superid":55,"id":0," type":"out"}}]},"57":{"type":"orgate","id":57,"x":-547.78051247776,"y":1054.9164351618322,"gpout":[{"superid":57,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":57,"id":0,"type":"in","connected":{"superid":39,"id":0," type":"out"}},{"superid":57,"id":1,"type":"in","connected":{"superid":38,"id":0," type":"out"}}]},"58":{"type":"upnode","id":58,"x":-899.2822091068532,"y":555.2326507381214,"gpout":[{"superid":58,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":58,"id":0,"type":"in","connected":{"superid":36,"id":0," type":"out"}}]},"59":{"type":"triandgate","id":59,"x":-906.9833335925372,"y":603.1038976604124,"gpout":[{"superid":59,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":59,"id":0,"type":"in","connected":{"superid":58,"id":0," type":"out"}},{"superid":59,"id":1,"type":"in","connected":{"superid":46,"id":0," type":"out"}},{"superid":59,"id":2,"type":"in","connected":{"superid":49,"id":0," type":"out"}}]},"60":{"type":"andgate","id":60,"x":-955.4862637208702,"y":543.9909515665069,"gpout":[{"superid":60,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":60,"id":0,"type":"in","connected":{"superid":61,"id":0," type":"out"}},{"superid":60,"id":1,"type":"in","connected":{"superid":46,"id":0," type":"out"}}]},"61":{"type":"upnode","id":61,"x":-935.7819483562347,"y":493.9723048716636,"gpout":[{"superid":61,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":61,"id":0,"type":"in","connected":{"superid":27,"id":0," type":"out"}}]},"63":{"type":"triorgate","id":63,"x":-981.9083213932107,"y":674.3773742448242,"gpout":[{"superid":63,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":63,"id":0,"type":"in","connected":{"superid":59,"id":0," type":"out"}},{"superid":63,"id":1,"type":"in","connected":{"superid":60,"id":0," type":"out"}},{"superid":63,"id":2,"type":"in","connected":{"superid":45,"id":0," type":"out"}}]},"64":{"type":"triorgate","id":64,"x":-889.6714463464426,"y":1013.5799669333886,"gpout":[{"superid":64,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":64,"id":0,"type":"in","connected":{"superid":52,"id":0," type":"out"}},{"superid":64,"id":1,"type":"in","connected":{"superid":56,"id":0," type":"out"}},{"superid":64,"id":2,"type":"in","connected":{"superid":63,"id":0," type":"out"}}]},"65":{"type":"upnode","id":65,"x":-697.9412247415096,"y":461.3316032412688,"gpout":[{"superid":65,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":65,"id":0,"type":"in","connected":{"superid":46,"id":0," type":"out"}}]},"66":{"type":"upnode","id":66,"x":-378.0947232671854,"y":503.3024111270398,"gpout":[{"superid":66,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":66,"id":0,"type":"in","connected":{"superid":28,"id":0," type":"out"}}]},"67":{"type":"upnode","id":67,"x":-71.27364492982454,"y":553.9568344374532,"gpout":[{"superid":67,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":67,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}}]},"68":{"type":"upnode","id":68,"x":169.69668310399894,"y":687.8292389006884,"gpout":[{"superid":68,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":68,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"69":{"type":"xorgate","id":69,"x":190.21539479582034,"y":1052.1454600888628,"gpout":[{"superid":69,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":69,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}},{"superid":69,"id":1,"type":"in","connected":{"superid":68,"id":0," type":"out"}}]},"70":{"type":"xorgate","id":70,"x":-51.158090008715845,"y":1143.634496292552,"gpout":[{"superid":70,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":70,"id":0,"type":"in","connected":{"superid":9,"id":0," type":"out"}},{"superid":70,"id":1,"type":"in","connected":{"superid":67,"id":0," type":"out"}}]},"71":{"type":"xorgate","id":71,"x":-313.2216683868503,"y":1154.973785741606,"gpout":[{"superid":71,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":71,"id":0,"type":"in","connected":{"superid":21,"id":0," type":"out"}},{"superid":71,"id":1,"type":"in","connected":{"superid":66,"id":0," type":"out"}}]},"72":{"type":"xorgate","id":72,"x":-636.5031261820585,"y":1086.3844314386827,"gpout":[{"superid":72,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":72,"id":0,"type":"in","connected":{"superid":57,"id":0," type":"out"}},{"superid":72,"id":1,"type":"in","connected":{"superid":65,"id":0," type":"out"}}]},"73":{"type":"downnode","id":73,"x":-1080.6299728151762,"y":962.1356406325206,"gpout":[{"superid":73,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":73,"id":0,"type":"in","connected":{"superid":64,"id":0," type":"out"}}]},"74":{"type":"downnode","id":74,"x":-1078.9214006744796,"y":-159.6539613560334,"gpout":[{"superid":74,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":74,"id":0,"type":"in","connected":{"superid":73,"id":0," type":"out"}}]},"75":{"type":"downnode","id":75,"x":-1109.880069696983,"y":1027.7359605607273,"gpout":[{"superid":75,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":75,"id":0,"type":"in","connected":{"superid":72,"id":0," type":"out"}}]},"76":{"type":"downnode","id":76,"x":-1171.6704229434,"y":1072.7696078420145,"gpout":[{"superid":76,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":76,"id":0,"type":"in","connected":{"superid":71,"id":0," type":"out"}}]},"78":{"type":"downnode","id":78,"x":334.2685198156727,"y":1037.6492180825046,"gpout":[{"superid":78,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":78,"id":0,"type":"in","connected":{"superid":69,"id":0," type":"out"}}]},"79":{"type":"downnode","id":79,"x":423.6173236943781,"y":1127.9097444497684,"gpout":[{"superid":79,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":79,"id":0,"type":"in","connected":{"superid":70,"id":0," type":"out"}}]},"80":{"type":"outputbulb","id":80,"x":51.55323926982942,"y":-69.74753718915724,"gpout":[],"gpin":[{"superid":80,"id":0,"type":"in","connected":{"superid":86,"id":0," type":"out"}}]},"81":{"type":"outputbulb","id":81,"x":80.67590818909719,"y":-70.70237879306768,"gpout":[],"gpin":[{"superid":81,"id":0,"type":"in","connected":{"superid":85,"id":0," type":"out"}}]},"82":{"type":"outputbulb","id":82,"x":19.81326674613868,"y":-71.92195481439074,"gpout":[],"gpin":[{"superid":82,"id":0,"type":"in","connected":{"superid":87,"id":0," type":"out"}}]},"83":{"type":"outputbulb","id":83,"x":-6.692098568706115,"y":-71.17979959502287,"gpout":[],"gpin":[{"superid":83,"id":0,"type":"in","connected":{"superid":88,"id":0," type":"out"}}]},"84":{"type":"outputbulb","id":84,"x":-55.389020368137466,"y":-68.31527478329161,"gpout":[],"gpin":[{"superid":84,"id":0,"type":"in","connected":{"superid":89,"id":0," type":"out"}}]},"85":{"type":"upnode","id":85,"x":91.42331573041318,"y":-246.84143061648922,"gpout":[{"superid":85,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":85,"id":0,"type":"in","connected":{"superid":90,"id":0," type":"out"}}]},"86":{"type":"upnode","id":86,"x":61.49875146927275,"y":-276.76599487762974,"gpout":[{"superid":86,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":86,"id":0,"type":"in","connected":{"superid":91,"id":0," type":"out"}}]},"87":{"type":"upnode","id":87,"x":33.236663000417906,"y":-297.54694228119945,"gpout":[{"superid":87,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":87,"id":0,"type":"in","connected":{"superid":93,"id":0," type":"out"}}]},"88":{"type":"upnode","id":88,"x":-9.987707599007166,"y":-231.04791058977628,"gpout":[{"superid":88,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":88,"id":0,"type":"in","connected":{"superid":92,"id":0," type":"out"}}]},"89":{"type":"upnode","id":89,"x":-52.38084030228944,"y":-188.654777886494,"gpout":[{"superid":89,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":89,"id":0,"type":"in","connected":{"superid":74,"id":0," type":"out"}}]},"90":{"type":"downnode","id":90,"x":333.3495389288091,"y":-253.32568597018428,"gpout":[{"superid":90,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":90,"id":0,"type":"in","connected":{"superid":78,"id":0," type":"out"}}]},"91":{"type":"downnode","id":91,"x":444.6293547664053,"y":-282.79979935419624,"gpout":[{"superid":91,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":91,"id":0,"type":"in","connected":{"superid":79,"id":0," type":"out"}}]},"92":{"type":"downnode","id":92,"x":-1107.3060234920013,"y":-204.75012705634038,"gpout":[{"superid":92,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":92,"id":0,"type":"in","connected":{"superid":75,"id":0," type":"out"}}]},"93":{"type":"downnode","id":93,"x":-1159.869906155231,"y":-285.8947859363932,"gpout":[{"superid":93,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":93,"id":0,"type":"in","connected":{"superid":76,"id":0," type":"out"}}]}},"gatecount":94}


const decoderjson = {"content":{"0":{"type":"switchbutton","id":0,"x":-271.93276272248823,"y":-91.937433058181,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"1":{"type":"switchbutton","id":1,"x":-263.15816288493124,"y":-27.2247592561979,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"2":{"type":"switchbutton","id":2,"x":-252.18991308798496,"y":36.39108956609053,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"6":{"type":"triandgate","id":6,"x":-113.5,"y":181,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":6,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}},{"superid":6,"id":1,"type":"in","connected":{"superid":43,"id":0," type":"out"}},{"superid":6,"id":2,"type":"in","connected":{"superid":51,"id":0," type":"out"}}]},"7":{"type":"upnode","id":7,"x":-145.5,"y":50,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"8":{"type":"upnode","id":8,"x":-15.5,"y":48.5,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"9":{"type":"upnode","id":9,"x":92.5,"y":49.5,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"10":{"type":"upnode","id":10,"x":199.41001805774187,"y":47.502284787824195,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":10,"id":0,"type":"in","connected":{"superid":9,"id":0," type":"out"}}]},"11":{"type":"upnode","id":11,"x":329.41001805774187,"y":46.002284787824195,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":11,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}}]},"12":{"type":"upnode","id":12,"x":437.41001805774187,"y":47.002284787824195,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"13":{"type":"upnode","id":13,"x":554.4607358609194,"y":40.676686727176815,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":13,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"14":{"type":"upnode","id":14,"x":662.4607358609194,"y":41.676686727176815,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":14,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"17":{"type":"notgate","id":17,"x":50.31985650456487,"y":117.3799043363766,"gpout":[{"superid":17,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":17,"id":0,"type":"in","connected":{"superid":52,"id":0," type":"out"}}]},"18":{"type":"triandgate","id":18,"x":15.819856504564868,"y":183.8799043363766,"gpout":[{"superid":18,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":18,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}},{"superid":18,"id":1,"type":"in","connected":{"superid":44,"id":0," type":"out"}},{"superid":18,"id":2,"type":"in","connected":{"superid":17,"id":0," type":"out"}}]},"20":{"type":"notgate","id":20,"x":130.72870821508184,"y":110.14258378717099,"gpout":[{"superid":20,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":20,"id":0,"type":"in","connected":{"superid":45,"id":0," type":"out"}}]},"22":{"type":"triandgate","id":22,"x":128.72870821508184,"y":177.642583787171,"gpout":[{"superid":22,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":22,"id":0,"type":"in","connected":{"superid":9,"id":0," type":"out"}},{"superid":22,"id":1,"type":"in","connected":{"superid":20,"id":0," type":"out"}},{"superid":22,"id":2,"type":"in","connected":{"superid":53,"id":0," type":"out"}}]},"24":{"type":"notgate","id":24,"x":240.28014371276976,"y":116.37990433637657,"gpout":[{"superid":24,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":24,"id":0,"type":"in","connected":{"superid":46,"id":0," type":"out"}}]},"25":{"type":"notgate","id":25,"x":272.78014371276976,"y":117.37990433637657,"gpout":[{"superid":25,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":25,"id":0,"type":"in","connected":{"superid":54,"id":0," type":"out"}}]},"26":{"type":"triandgate","id":26,"x":238.28014371276976,"y":183.87990433637657,"gpout":[{"superid":26,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":26,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}},{"superid":26,"id":1,"type":"in","connected":{"superid":24,"id":0," type":"out"}},{"superid":26,"id":2,"type":"in","connected":{"superid":25,"id":0," type":"out"}}]},"27":{"type":"notgate","id":27,"x":337.10000021733464,"y":118.75980867275317,"gpout":[{"superid":27,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":27,"id":0,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"30":{"type":"triandgate","id":30,"x":367.60000021733464,"y":186.75980867275317,"gpout":[{"superid":30,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":30,"id":0,"type":"in","connected":{"superid":27,"id":0," type":"out"}},{"superid":30,"id":1,"type":"in","connected":{"superid":47,"id":0," type":"out"}},{"superid":30,"id":2,"type":"in","connected":{"superid":55,"id":0," type":"out"}}]},"31":{"type":"notgate","id":31,"x":450.0088519278516,"y":112.52248812354756,"gpout":[{"superid":31,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":31,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"33":{"type":"notgate","id":33,"x":515.0088519278515,"y":114.02248812354756,"gpout":[{"superid":33,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":33,"id":0,"type":"in","connected":{"superid":56,"id":0," type":"out"}}]},"34":{"type":"triandgate","id":34,"x":480.5088519278516,"y":180.52248812354756,"gpout":[{"superid":34,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":34,"id":0,"type":"in","connected":{"superid":31,"id":0," type":"out"}},{"superid":34,"id":1,"type":"in","connected":{"superid":48,"id":0," type":"out"}},{"superid":34,"id":2,"type":"in","connected":{"superid":33,"id":0," type":"out"}}]},"35":{"type":"notgate","id":35,"x":565.7976079747452,"y":114.34593310066401,"gpout":[{"superid":35,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":35,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"36":{"type":"notgate","id":36,"x":598.2976079747452,"y":114.84593310066401,"gpout":[{"superid":36,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":36,"id":0,"type":"in","connected":{"superid":49,"id":0," type":"out"}}]},"38":{"type":"triandgate","id":38,"x":596.2976079747452,"y":182.345933100664,"gpout":[{"superid":38,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":38,"id":0,"type":"in","connected":{"superid":35,"id":0," type":"out"}},{"superid":38,"id":1,"type":"in","connected":{"superid":36,"id":0," type":"out"}},{"superid":38,"id":2,"type":"in","connected":{"superid":57,"id":0," type":"out"}}]},"39":{"type":"notgate","id":39,"x":678.7064596852622,"y":108.1086125514584,"gpout":[{"superid":39,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":39,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"40":{"type":"notgate","id":40,"x":711.2064596852621,"y":108.6086125514584,"gpout":[{"superid":40,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":40,"id":0,"type":"in","connected":{"superid":50,"id":0," type":"out"}}]},"41":{"type":"notgate","id":41,"x":743.7064596852621,"y":109.6086125514584,"gpout":[{"superid":41,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":41,"id":0,"type":"in","connected":{"superid":58,"id":0," type":"out"}}]},"42":{"type":"triandgate","id":42,"x":709.2064596852621,"y":176.1086125514584,"gpout":[{"superid":42,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":42,"id":0,"type":"in","connected":{"superid":39,"id":0," type":"out"}},{"superid":42,"id":1,"type":"in","connected":{"superid":40,"id":0," type":"out"}},{"superid":42,"id":2,"type":"in","connected":{"superid":41,"id":0," type":"out"}}]},"43":{"type":"upnode","id":43,"x":-109.9363004329854,"y":-18.045375541231763,"gpout":[{"superid":43,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":43,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]},"44":{"type":"upnode","id":44,"x":20.063699567014595,"y":-19.545375541231763,"gpout":[{"superid":44,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":44,"id":0,"type":"in","connected":{"superid":43,"id":0," type":"out"}}]},"45":{"type":"upnode","id":45,"x":128.0636995670146,"y":-18.545375541231763,"gpout":[{"superid":45,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":45,"id":0,"type":"in","connected":{"superid":44,"id":0," type":"out"}}]},"46":{"type":"upnode","id":46,"x":234.97371762475646,"y":-20.54309075340757,"gpout":[{"superid":46,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":46,"id":0,"type":"in","connected":{"superid":45,"id":0," type":"out"}}]},"47":{"type":"upnode","id":47,"x":364.97371762475643,"y":-22.04309075340757,"gpout":[{"superid":47,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":47,"id":0,"type":"in","connected":{"superid":46,"id":0," type":"out"}}]},"48":{"type":"upnode","id":48,"x":472.97371762475643,"y":-21.04309075340757,"gpout":[{"superid":48,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":48,"id":0,"type":"in","connected":{"superid":47,"id":0," type":"out"}}]},"49":{"type":"upnode","id":49,"x":590.024435427934,"y":-27.36868881405495,"gpout":[{"superid":49,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":49,"id":0,"type":"in","connected":{"superid":48,"id":0," type":"out"}}]},"50":{"type":"upnode","id":50,"x":698.024435427934,"y":-26.36868881405495,"gpout":[{"superid":50,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":50,"id":0,"type":"in","connected":{"superid":49,"id":0," type":"out"}}]},"51":{"type":"upnode","id":51,"x":-70.76352575772444,"y":-98.12100144328467,"gpout":[{"superid":51,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":51,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"52":{"type":"upnode","id":52,"x":59.236474242275534,"y":-99.62100144328467,"gpout":[{"superid":52,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":52,"id":0,"type":"in","connected":{"superid":51,"id":0," type":"out"}}]},"53":{"type":"upnode","id":53,"x":167.23647424227553,"y":-98.62100144328467,"gpout":[{"superid":53,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":53,"id":0,"type":"in","connected":{"superid":52,"id":0," type":"out"}}]},"54":{"type":"upnode","id":54,"x":274.14649230001737,"y":-100.61871665546047,"gpout":[{"superid":54,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":54,"id":0,"type":"in","connected":{"superid":53,"id":0," type":"out"}}]},"55":{"type":"upnode","id":55,"x":404.14649230001737,"y":-102.11871665546047,"gpout":[{"superid":55,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":55,"id":0,"type":"in","connected":{"superid":54,"id":0," type":"out"}}]},"56":{"type":"upnode","id":56,"x":512.1464923000174,"y":-101.11871665546047,"gpout":[{"superid":56,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":56,"id":0,"type":"in","connected":{"superid":55,"id":0," type":"out"}}]},"57":{"type":"upnode","id":57,"x":629.197210103195,"y":-107.44431471610785,"gpout":[{"superid":57,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":57,"id":0,"type":"in","connected":{"superid":56,"id":0," type":"out"}}]},"58":{"type":"upnode","id":58,"x":737.197210103195,"y":-106.44431471610785,"gpout":[{"superid":58,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":58,"id":0,"type":"in","connected":{"superid":57,"id":0," type":"out"}}]},"59":{"type":"outputbulb","id":59,"x":-111.43682554281632,"y":289.43118065518206,"gpout":[],"gpin":[{"superid":59,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"60":{"type":"outputbulb","id":60,"x":17.839933106658357,"y":288.12535481023787,"gpout":[],"gpin":[{"superid":60,"id":0,"type":"in","connected":{"superid":18,"id":0," type":"out"}}]},"61":{"type":"outputbulb","id":61,"x":127.09402880032214,"y":286.81952896529367,"gpout":[],"gpin":[{"superid":61,"id":0,"type":"in","connected":{"superid":22,"id":0," type":"out"}}]},"62":{"type":"outputbulb","id":62,"x":241.13615259211463,"y":292.04283234507045,"gpout":[],"gpin":[{"superid":62,"id":0,"type":"in","connected":{"superid":26,"id":0," type":"out"}}]},"63":{"type":"outputbulb","id":63,"x":368.671810114997,"y":289.43118065518206,"gpout":[],"gpin":[{"superid":63,"id":0,"type":"in","connected":{"superid":30,"id":0," type":"out"}}]},"64":{"type":"outputbulb","id":64,"x":482.7139339067895,"y":292.4781076267185,"gpout":[],"gpin":[{"superid":64,"id":0,"type":"in","connected":{"superid":34,"id":0," type":"out"}}]},"65":{"type":"outputbulb","id":65,"x":595.8855071352859,"y":291.17228178177436,"gpout":[],"gpin":[{"superid":65,"id":0,"type":"in","connected":{"superid":38,"id":0," type":"out"}}]},"66":{"type":"outputbulb","id":66,"x":709.4923556454303,"y":286.3842536836456,"gpout":[],"gpin":[{"superid":66,"id":0,"type":"in","connected":{"superid":42,"id":0," type":"out"}}]}},"gatecount":67};


const pencoderjson = {"content":{"0":{"type":"upnode","id":0,"x":-52.56070605308065,"y":43.31082350871749,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":0,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]},"1":{"type":"switchbutton","id":1,"x":-280.1815659616368,"y":38.270329766583274,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"2":{"type":"upnode","id":2,"x":158.43929394691935,"y":38.81082350871749,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":2,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"3":{"type":"upnode","id":3,"x":347.94035646371714,"y":78.43796513643896,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":3,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"4":{"type":"upnode","id":4,"x":-21.199225353138445,"y":-69.83026958756582,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"5":{"type":"switchbutton","id":5,"x":-277.9879160022475,"y":-84.57406795921496,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"6":{"type":"upnode","id":6,"x":189.80077464686156,"y":-74.33026958756582,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":6,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"7":{"type":"upnode","id":7,"x":418.59557763585417,"y":-101.94065832654621,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"8":{"type":"upnode","id":8,"x":13.30413771526571,"y":-193.52841209645894,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":9,"id":0," type":"out"}}]},"9":{"type":"switchbutton","id":9,"x":-286.4919065824624,"y":-205.5093586488867,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"10":{"type":"upnode","id":10,"x":171.63518312522717,"y":-202.22148130966164,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":10,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"11":{"type":"upnode","id":11,"x":371.21501755571524,"y":-201.68920586368088,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":11,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}}]},"12":{"type":"upnode","id":12,"x":51.7839023642388,"y":-329.40653016775036,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"13":{"type":"switchbutton","id":13,"x":-280.1815659616368,"y":-335.7469883092846,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"14":{"type":"upnode","id":14,"x":262.78390236423877,"y":-333.9065301677504,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":14,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"15":{"type":"upnode","id":15,"x":433.85149581956534,"y":-329.16603843111676,"gpout":[{"superid":15,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":15,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"19":{"type":"orgate","id":19,"x":-38.669651445912244,"y":113.16553082283119,"gpout":[{"superid":19,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":19,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}},{"superid":19,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"20":{"type":"orgate","id":20,"x":26.262584168966647,"y":113.16553082283119,"gpout":[{"superid":20,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":20,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}},{"superid":20,"id":1,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"21":{"type":"orgate","id":21,"x":-8.298121884114053,"y":179.1450605605307,"gpout":[{"superid":21,"id":0,"type":"out","connected":[]}],"gpin":[{"superid":21,"id":0,"type":"in","connected":{"superid":20,"id":0," type":"out"}},{"superid":21,"id":1,"type":"in","connected":{"superid":19,"id":0," type":"out"}}]},"22":{"type":"upnode","id":22,"x":-60.601047011727275,"y":-476.53955568032666,"gpout":[{"superid":22,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":22,"id":0,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"23":{"type":"switchbutton","id":23,"x":-286.4919065824624,"y":-497.0929763220879,"gpout":[{"superid":23,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"24":{"type":"upnode","id":24,"x":150.3989529882727,"y":-481.03955568032666,"gpout":[{"superid":24,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":24,"id":0,"type":"in","connected":{"superid":22,"id":0," type":"out"}}]},"25":{"type":"upnode","id":25,"x":338.8989529882727,"y":-483.03955568032666,"gpout":[{"superid":25,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":25,"id":0,"type":"in","connected":{"superid":24,"id":0," type":"out"}}]},"26":{"type":"upnode","id":26,"x":-29.239566311785083,"y":-589.6806487766099,"gpout":[{"superid":26,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":26,"id":0,"type":"in","connected":{"superid":27,"id":0," type":"out"}}]},"27":{"type":"switchbutton","id":27,"x":-289.2557323423979,"y":-606.2640938395424,"gpout":[{"superid":27,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"28":{"type":"upnode","id":28,"x":181.7604336882149,"y":-594.1806487766099,"gpout":[{"superid":28,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":28,"id":0,"type":"in","connected":{"superid":26,"id":0," type":"out"}}]},"29":{"type":"upnode","id":29,"x":523.3315525498456,"y":-602.3458718045051,"gpout":[{"superid":29,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":29,"id":0,"type":"in","connected":{"superid":28,"id":0," type":"out"}}]},"30":{"type":"upnode","id":30,"x":5.263796756619072,"y":-713.3787912855031,"gpout":[{"superid":30,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":30,"id":0,"type":"in","connected":{"superid":31,"id":0," type":"out"}}]},"31":{"type":"switchbutton","id":31,"x":-293.40147098230125,"y":-733.400078796578,"gpout":[{"superid":31,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"32":{"type":"upnode","id":32,"x":216.26379675661906,"y":-717.8787912855031,"gpout":[{"superid":32,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":32,"id":0,"type":"in","connected":{"superid":30,"id":0," type":"out"}}]},"33":{"type":"upnode","id":33,"x":404.76379675661906,"y":-719.8787912855031,"gpout":[{"superid":33,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":33,"id":0,"type":"in","connected":{"superid":32,"id":0," type":"out"}}]},"34":{"type":"upnode","id":34,"x":43.74356140559216,"y":-849.2569093567945,"gpout":[{"superid":34,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":34,"id":0,"type":"in","connected":{"superid":35,"id":0," type":"out"}}]},"35":{"type":"switchbutton","id":35,"x":-290.61432131467234,"y":-861.8987917252564,"gpout":[{"superid":35,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"36":{"type":"upnode","id":36,"x":254.74356140559212,"y":-853.7569093567945,"gpout":[{"superid":36,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":36,"id":0,"type":"in","connected":{"superid":34,"id":0," type":"out"}}]},"37":{"type":"upnode","id":37,"x":443.24356140559223,"y":-855.7569093567945,"gpout":[{"superid":37,"id":0,"type":"out","connected":[]}],"gpin":[{"superid":37,"id":0,"type":"in","connected":{"superid":36,"id":0," type":"out"}}]},"38":{"type":"norgate","id":38,"x":246.03016993522237,"y":-147.46750815148118,"gpout":[{"superid":38,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":38,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}},{"superid":38,"id":1,"type":"in","connected":{"superid":10,"id":0," type":"out"}}]},"39":{"type":"orgate","id":39,"x":181.08026457673685,"y":-392.06608790577775,"gpout":[{"superid":39,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":39,"id":0,"type":"in","connected":{"superid":28,"id":0," type":"out"}},{"superid":39,"id":1,"type":"in","connected":{"superid":24,"id":0," type":"out"}}]},"40":{"type":"andgate","id":40,"x":234.8092632320791,"y":-13.530478885248641,"gpout":[{"superid":40,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":40,"id":0,"type":"in","connected":{"superid":38,"id":0," type":"out"}},{"superid":40,"id":1,"type":"in","connected":{"superid":39,"id":0," type":"out"}}]},"41":{"type":"triorgate","id":41,"x":186.59746525579737,"y":165.1856687854509,"gpout":[{"superid":41,"id":0,"type":"out","connected":[]}],"gpin":[{"superid":41,"id":0,"type":"in","connected":{"superid":40,"id":0," type":"out"}},{"superid":41,"id":1,"type":"in","connected":{"superid":42,"id":0," type":"out"}},{"superid":41,"id":2,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"42":{"type":"andgate","id":42,"x":179.11632419051227,"y":-18.517906262105384,"gpout":[{"superid":42,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":42,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}},{"superid":42,"id":1,"type":"in","connected":{"superid":43,"id":0," type":"out"}}]},"43":{"type":"notgate","id":43,"x":164.98527995608487,"y":-143.20359068352366,"gpout":[{"superid":43,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":43,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}}]},"44":{"type":"norgate","id":44,"x":441.0390008317095,"y":-48.741432973407726,"gpout":[{"superid":44,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":44,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}},{"superid":44,"id":1,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"45":{"type":"andgate","id":45,"x":506.7067946269898,"y":-472.6727600062301,"gpout":[{"superid":45,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":45,"id":0,"type":"in","connected":{"superid":46,"id":0," type":"out"}},{"superid":45,"id":1,"type":"in","connected":{"superid":33,"id":0," type":"out"}}]},"46":{"type":"notgate","id":46,"x":524.1627904459883,"y":-550.8091222436522,"gpout":[{"superid":46,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":46,"id":0,"type":"in","connected":{"superid":29,"id":0," type":"out"}}]},"47":{"type":"orgate","id":47,"x":496.7319398732763,"y":-396.1988735610935,"gpout":[{"superid":47,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":47,"id":0,"type":"in","connected":{"superid":45,"id":0," type":"out"}},{"superid":47,"id":1,"type":"in","connected":{"superid":25,"id":0," type":"out"}}]},"48":{"type":"andgate","id":48,"x":470.9635650928499,"y":65.96939669429713,"gpout":[{"superid":48,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":48,"id":0,"type":"in","connected":{"superid":47,"id":0," type":"out"}},{"superid":48,"id":1,"type":"in","connected":{"superid":44,"id":0," type":"out"}}]},"49":{"type":"notgate","id":49,"x":408.62072288214074,"y":-21.310582400695694,"gpout":[{"superid":49,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":49,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"50":{"type":"andgate","id":50,"x":401.13958181685564,"y":55.99454194058366,"gpout":[{"superid":50,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":50,"id":0,"type":"in","connected":{"superid":49,"id":0," type":"out"}},{"superid":50,"id":1,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"51":{"type":"triorgate","id":51,"x":414.43938815514025,"y":166.54918212757457,"gpout":[{"superid":51,"id":0,"type":"out","connected":[]}],"gpin":[{"superid":51,"id":0,"type":"in","connected":{"superid":48,"id":0," type":"out"}},{"superid":51,"id":1,"type":"in","connected":{"superid":50,"id":0," type":"out"}},{"superid":51,"id":2,"type":"in","connected":{"superid":3,"id":0," type":"out"}}]}},"gatecount":52};


const xorjson = {"content":{"0":{"type":"switchbutton","id":0,"x":-48,"y":-76,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"1":{"type":"switchbutton","id":1,"x":52.5,"y":-77.5,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"2":{"type":"andgate","id":2,"x":-37.5,"y":62,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":2,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":2,"id":1,"type":"in","connected":{"superid":3,"id":0," type":"out"}}]},"3":{"type":"notgate","id":3,"x":-47.5,"y":-4,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":3,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"4":{"type":"andgate","id":4,"x":42.5,"y":61.5,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}},{"superid":4,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"5":{"type":"notgate","id":5,"x":54,"y":-6.5,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":5,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]},"6":{"type":"orgate","id":6,"x":3.5,"y":134,"gpout":[{"superid":6,"id":0,"type":"out","connected":[]}],"gpin":[{"superid":6,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}},{"superid":6,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]}},"gatecount":7};


const rsnorjson = {"content":{"0":{"type":"norgate","id":0,"x":-38,"y":4,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":0,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":0,"id":1,"type":"in","connected":{"superid":3,"id":0," type":"out"}}]},"1":{"type":"norgate","id":1,"x":36,"y":3.5,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":1,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}},{"superid":1,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"2":{"type":"switchbutton","id":2,"x":42.5,"y":-94.5,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"3":{"type":"switchbutton","id":3,"x":-44.5,"y":-90.5,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"4":{"type":"outputbulb","id":4,"x":-38,"y":77,"gpout":[],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"5":{"type":"outputbulb","id":5,"x":39,"y":77.5,"gpout":[],"gpin":[{"superid":5,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]}},"gatecount":6};


const msrsjson = {"content":{"0":{"type":"nandgate","id":0,"x":-38.03143313302078,"y":92.05647304695276,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":0,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":0,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"1":{"type":"nandgate","id":1,"x":41.46856686697922,"y":90.55647304695276,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":1,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}},{"superid":1,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"2":{"type":"nandgate","id":2,"x":-45.27357484976558,"y":35.323654677629534,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":2,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}},{"superid":2,"id":1,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"3":{"type":"nandgate","id":3,"x":51.22642515023442,"y":35.323654677629534,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":3,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}},{"superid":3,"id":1,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"4":{"type":"switchbutton","id":4,"x":132.1516450940762,"y":-53.92133295826842,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"5":{"type":"switchbutton","id":5,"x":55.607958485301076,"y":-103.93997965311156,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"6":{"type":"switchbutton","id":6,"x":-54.28149258670281,"y":-103.18212136985638,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"7":{"type":"nandgate","id":7,"x":-36.7421417167448,"y":224.264251502344,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}},{"superid":7,"id":1,"type":"in","connected":{"superid":9,"id":0," type":"out"}}]},"8":{"type":"nandgate","id":8,"x":42.7578582832552,"y":222.764251502344,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}},{"superid":8,"id":1,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"9":{"type":"nandgate","id":9,"x":-45.5,"y":164.5,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":11,"id":0," type":"out"}},{"superid":9,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"10":{"type":"nandgate","id":10,"x":51,"y":164.5,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":10,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":10,"id":1,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"11":{"type":"upnode","id":11,"x":-0.4735544755836685,"y":132.5118047225106,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":11,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"12":{"type":"upnode","id":12,"x":116.23662114571701,"y":122.659647040193,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"13":{"type":"upnode","id":13,"x":-1.2735748497655806,"y":-3.176345322370466,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":13,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"14":{"type":"notgate","id":14,"x":118.5101959954826,"y":68.09385064581865,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":14,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"15":{"type":"outputbulb","id":15,"x":-32.612708636804115,"y":306.80555915175273,"gpout":[],"gpin":[{"superid":15,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"16":{"type":"outputbulb","id":16,"x":42.57635611832819,"y":306.2040466337117,"gpout":[],"gpin":[{"superid":16,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]}},"gatecount":17};


const jkjson = {"content":{"0":{"type":"nandgate","id":0,"x":-38.03143313302078,"y":92.05647304695276,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":0,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":0,"id":1,"type":"in","connected":{"superid":17,"id":0," type":"out"}}]},"1":{"type":"nandgate","id":1,"x":41.46856686697922,"y":90.55647304695276,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":1,"id":0,"type":"in","connected":{"superid":19,"id":0," type":"out"}},{"superid":1,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"4":{"type":"switchbutton","id":4,"x":128.45558373193109,"y":-115.29882477003193,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"5":{"type":"switchbutton","id":5,"x":61.764054805473535,"y":-164.55961318161988,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"6":{"type":"switchbutton","id":6,"x":-69.34542819767594,"y":-172.13819601417188,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"7":{"type":"nandgate","id":7,"x":-36.7421417167448,"y":224.264251502344,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}},{"superid":7,"id":1,"type":"in","connected":{"superid":9,"id":0," type":"out"}}]},"8":{"type":"nandgate","id":8,"x":42.7578582832552,"y":222.764251502344,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}},{"superid":8,"id":1,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"9":{"type":"nandgate","id":9,"x":-45.5,"y":164.5,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":11,"id":0," type":"out"}},{"superid":9,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"10":{"type":"nandgate","id":10,"x":51,"y":164.5,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":10,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":10,"id":1,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"11":{"type":"upnode","id":11,"x":-0.4735544755836685,"y":132.5118047225106,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":11,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"12":{"type":"upnode","id":12,"x":116.23662114571701,"y":122.659647040193,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"13":{"type":"upnode","id":13,"x":-2.422273204762618,"y":-59.46256471722519,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[{"superid":13,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"14":{"type":"notgate","id":14,"x":118.5101959954826,"y":68.09385064581865,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":14,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"15":{"type":"outputbulb","id":15,"x":-32.612708636804115,"y":306.80555915175273,"gpout":[],"gpin":[{"superid":15,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"16":{"type":"outputbulb","id":16,"x":42.57635611832819,"y":306.2040466337117,"gpout":[],"gpin":[{"superid":16,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"17":{"type":"notgate","id":17,"x":-46.80001390710548,"y":38.30178352859632,"gpout":[{"superid":17,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":17,"id":0,"type":"in","connected":{"superid":18,"id":0," type":"out"}}]},"18":{"type":"triandgate","id":18,"x":-46.80001390710548,"y":-13.963991623768791,"gpout":[{"superid":18,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":18,"id":0,"type":"in","connected":{"superid":25,"id":0," type":"out"}},{"superid":18,"id":1,"type":"in","connected":{"superid":6,"id":0," type":"out"}},{"superid":18,"id":2,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"19":{"type":"notgate","id":19,"x":49.69064791264549,"y":34.855688463605205,"gpout":[{"superid":19,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":19,"id":0,"type":"in","connected":{"superid":20,"id":0," type":"out"}}]},"20":{"type":"triandgate","id":20,"x":49.69064791264549,"y":-14.53834080126731,"gpout":[{"superid":20,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":20,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}},{"superid":20,"id":1,"type":"in","connected":{"superid":5,"id":0," type":"out"}},{"superid":20,"id":2,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"22":{"type":"downnode","id":22,"x":155.94524574987128,"y":282.40018396546634,"gpout":[{"superid":22,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":22,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"23":{"type":"downnode","id":23,"x":166.8578801223431,"y":-18.55878504375694,"gpout":[{"superid":23,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":23,"id":0,"type":"in","connected":{"superid":22,"id":0," type":"out"}}]},"24":{"type":"downnode","id":24,"x":-93.3222972844854,"y":270.33885123799746,"gpout":[{"superid":24,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":24,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"25":{"type":"downnode","id":25,"x":-99.6401382369691,"y":-37.51230790120803,"gpout":[{"superid":25,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":25,"id":0,"type":"in","connected":{"superid":24,"id":0," type":"out"}}]}},"gatecount":26};


const complementerjson = {"content":{"0":{"type":"switchbutton","id":0,"x":-37.504922245071796,"y":-95.93543354804008,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"1":{"type":"xorgate","id":1,"x":-42,"y":20,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":1,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}},{"superid":1,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"2":{"type":"upnode","id":2,"x":-52,"y":-45.5,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":2,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}}]},"3":{"type":"switchbutton","id":3,"x":-135.80826159765246,"y":-99.23420332497231,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"4":{"type":"switchbutton","id":4,"x":7.35834672120663,"y":-97.91469541419941,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"5":{"type":"xorgate","id":5,"x":2,"y":18.5,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":5,"id":0,"type":"in","connected":{"superid":4,"id":0," type":"out"}},{"superid":5,"id":1,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"6":{"type":"upnode","id":6,"x":-8,"y":-47,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":6,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"7":{"type":"switchbutton","id":7,"x":47.60333799977994,"y":-100.55371123574521,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"8":{"type":"xorgate","id":8,"x":45,"y":18.5,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}},{"superid":8,"id":1,"type":"in","connected":{"superid":9,"id":0," type":"out"}}]},"9":{"type":"upnode","id":9,"x":35,"y":-47,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"10":{"type":"switchbutton","id":10,"x":93.78611487683126,"y":-96.59518750342652,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"11":{"type":"xorgate","id":11,"x":89,"y":17,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":11,"id":0,"type":"in","connected":{"superid":10,"id":0," type":"out"}},{"superid":11,"id":1,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"12":{"type":"upnode","id":12,"x":79.5,"y":-46.5,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":9,"id":0," type":"out"}}]},"13":{"type":"switchbutton","id":13,"x":135.35061406617746,"y":-99.89395728035876,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"14":{"type":"xorgate","id":14,"x":129,"y":18.5,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":14,"id":0,"type":"in","connected":{"superid":13,"id":0," type":"out"}},{"superid":14,"id":1,"type":"in","connected":{"superid":15,"id":0," type":"out"}}]},"15":{"type":"upnode","id":15,"x":119,"y":-47,"gpout":[{"superid":15,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":15,"id":0,"type":"in","connected":{"superid":12,"id":0," type":"out"}}]},"16":{"type":"switchbutton","id":16,"x":179.55412907706943,"y":-102.53297310190455,"gpout":[{"superid":16,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"17":{"type":"xorgate","id":17,"x":171,"y":20,"gpout":[{"superid":17,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":17,"id":0,"type":"in","connected":{"superid":16,"id":0," type":"out"}},{"superid":17,"id":1,"type":"in","connected":{"superid":18,"id":0," type":"out"}}]},"18":{"type":"upnode","id":18,"x":162,"y":-47,"gpout":[{"superid":18,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":18,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}}]},"19":{"type":"switchbutton","id":19,"x":227.05641386489367,"y":-100.55371123574521,"gpout":[{"superid":19,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"20":{"type":"xorgate","id":20,"x":216,"y":17,"gpout":[{"superid":20,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":20,"id":0,"type":"in","connected":{"superid":19,"id":0," type":"out"}},{"superid":20,"id":1,"type":"in","connected":{"superid":21,"id":0," type":"out"}}]},"21":{"type":"upnode","id":21,"x":206,"y":-48.5,"gpout":[{"superid":21,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":21,"id":0,"type":"in","connected":{"superid":18,"id":0," type":"out"}}]},"23":{"type":"fulladder","id":23,"x":250.5,"y":134,"gpout":[{"superid":23,"id":0,"type":"out","connected":[{}]},{"superid":23,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":23,"id":0,"type":"in","connected":{"superid":51,"id":0," type":"out"}},{"superid":23,"id":1,"type":"in","connected":{"superid":53,"id":0," type":"out"}},{"superid":23,"id":2,"type":"in","connected":{"superid":20,"id":0," type":"out"}}]},"26":{"type":"fulladder","id":26,"x":199.5,"y":133.5,"gpout":[{"superid":26,"id":0,"type":"out","connected":[{}]},{"superid":26,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":26,"id":0,"type":"in","connected":{"superid":23,"id":1," type":"out"}},{"superid":26,"id":1,"type":"in","connected":{"superid":29,"id":0," type":"out"}},{"superid":26,"id":2,"type":"in","connected":{"superid":17,"id":0," type":"out"}}]},"29":{"type":"upnode","id":29,"x":194.30376517667705,"y":75.36982370660647,"gpout":[{"superid":29,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":29,"id":0,"type":"in","connected":{"superid":53,"id":0," type":"out"}}]},"30":{"type":"fulladder","id":30,"x":150,"y":133.5,"gpout":[{"superid":30,"id":0,"type":"out","connected":[{}]},{"superid":30,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":30,"id":0,"type":"in","connected":{"superid":26,"id":1," type":"out"}},{"superid":30,"id":1,"type":"in","connected":{"superid":33,"id":0," type":"out"}},{"superid":30,"id":2,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"31":{"type":"fulladder","id":31,"x":99,"y":133,"gpout":[{"superid":31,"id":0,"type":"out","connected":[{}]},{"superid":31,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":31,"id":0,"type":"in","connected":{"superid":30,"id":1," type":"out"}},{"superid":31,"id":1,"type":"in","connected":{"superid":32,"id":0," type":"out"}},{"superid":31,"id":2,"type":"in","connected":{"superid":11,"id":0," type":"out"}}]},"32":{"type":"upnode","id":32,"x":97.5,"y":75.5,"gpout":[{"superid":32,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":32,"id":0,"type":"in","connected":{"superid":33,"id":0," type":"out"}}]},"33":{"type":"upnode","id":33,"x":148,"y":76,"gpout":[{"superid":33,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":33,"id":0,"type":"in","connected":{"superid":29,"id":0," type":"out"}}]},"34":{"type":"fulladder","id":34,"x":48.83809516024333,"y":130.50973041799068,"gpout":[{"superid":34,"id":0,"type":"out","connected":[{}]},{"superid":34,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":34,"id":0,"type":"in","connected":{"superid":31,"id":1," type":"out"}},{"superid":34,"id":1,"type":"in","connected":{"superid":35,"id":0," type":"out"}},{"superid":34,"id":2,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"35":{"type":"upnode","id":35,"x":43.641860336920374,"y":72.37955412459716,"gpout":[{"superid":35,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":35,"id":0,"type":"in","connected":{"superid":32,"id":0," type":"out"}}]},"36":{"type":"fulladder","id":36,"x":-0.6619048397566729,"y":130.50973041799068,"gpout":[{"superid":36,"id":0,"type":"out","connected":[{}]},{"superid":36,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":36,"id":0,"type":"in","connected":{"superid":34,"id":1," type":"out"}},{"superid":36,"id":1,"type":"in","connected":{"superid":39,"id":0," type":"out"}},{"superid":36,"id":2,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"37":{"type":"fulladder","id":37,"x":-51.66190483975667,"y":130.00973041799068,"gpout":[{"superid":37,"id":0,"type":"out","connected":[{}]},{"superid":37,"id":1,"type":"out","connected":[]}],"gpin":[{"superid":37,"id":0,"type":"in","connected":{"superid":36,"id":1," type":"out"}},{"superid":37,"id":1,"type":"in","connected":{"superid":38,"id":0," type":"out"}},{"superid":37,"id":2,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]},"38":{"type":"upnode","id":38,"x":-53.16190483975667,"y":72.5097304179907,"gpout":[{"superid":38,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":38,"id":0,"type":"in","connected":{"superid":39,"id":0," type":"out"}}]},"39":{"type":"upnode","id":39,"x":-2.661904839756673,"y":73.0097304179907,"gpout":[{"superid":39,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":39,"id":0,"type":"in","connected":{"superid":35,"id":0," type":"out"}}]},"40":{"type":"outputbulb","id":40,"x":-131.18998390994733,"y":209.53064779588516,"gpout":[],"gpin":[{"superid":40,"id":0,"type":"in","connected":{"superid":52,"id":0," type":"out"}}]},"41":{"type":"outputbulb","id":41,"x":-40.80369202200403,"y":208.21113988511223,"gpout":[],"gpin":[{"superid":41,"id":0,"type":"in","connected":{"superid":37,"id":0," type":"out"}}]},"45":{"type":"outputbulb","id":45,"x":9.337608587365978,"y":208.21113988511223,"gpout":[],"gpin":[{"superid":45,"id":0,"type":"in","connected":{"superid":36,"id":0," type":"out"}}]},"46":{"type":"outputbulb","id":46,"x":59.47890919673599,"y":206.2318780189529,"gpout":[],"gpin":[{"superid":46,"id":0,"type":"in","connected":{"superid":34,"id":0," type":"out"}}]},"47":{"type":"outputbulb","id":47,"x":109.620209806106,"y":206.2318780189529,"gpout":[],"gpin":[{"superid":47,"id":0,"type":"in","connected":{"superid":31,"id":0," type":"out"}}]},"48":{"type":"outputbulb","id":48,"x":163.06028019240824,"y":205.57212406356646,"gpout":[],"gpin":[{"superid":48,"id":0,"type":"in","connected":{"superid":30,"id":0," type":"out"}}]},"49":{"type":"outputbulb","id":49,"x":210.56256498023248,"y":202.27335428663423,"gpout":[],"gpin":[{"superid":49,"id":0,"type":"in","connected":{"superid":26,"id":0," type":"out"}}]},"50":{"type":"outputbulb","id":50,"x":261.3636195449889,"y":203.5928621974071,"gpout":[],"gpin":[{"superid":50,"id":0,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"51":{"type":"upnode","id":51,"x":275.21845260810437,"y":-19.40397472321216,"gpout":[{"superid":51,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":51,"id":0,"type":"in","connected":{"superid":52,"id":0," type":"out"}}]},"52":{"type":"upnode","id":52,"x":-133.16924577610672,"y":-15.44545099089347,"gpout":[{"superid":52,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":52,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}}]},"53":{"type":"alwaysfalse","id":53,"x":248.82829439264646,"y":45.911666860046154,"gpout":[{"superid":53,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]}},"gatecount":54};


const subtracterjson = {"content":{"55":{"type":"fulladder","id":55,"x":292.6467027394326,"y":116.85643399150776,"gpout":[{"superid":55,"id":0,"type":"out","connected":[{}]},{"superid":55,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":55,"id":0,"type":"in","connected":{"superid":65,"id":0," type":"out"}},{"superid":55,"id":1,"type":"in","connected":{"superid":57,"id":7," type":"out"}},{"superid":55,"id":2,"type":"in","connected":{"superid":83,"id":7," type":"out"}}]},"57":{"type":"complementer","id":57,"x":246.02962389332234,"y":-39.37377619545656,"gpout":[{"superid":57,"id":0,"type":"out","connected":[{}]},{"superid":57,"id":1,"type":"out","connected":[{}]},{"superid":57,"id":2,"type":"out","connected":[{}]},{"superid":57,"id":3,"type":"out","connected":[{}]},{"superid":57,"id":4,"type":"out","connected":[{}]},{"superid":57,"id":5,"type":"out","connected":[{}]},{"superid":57,"id":6,"type":"out","connected":[{}]},{"superid":57,"id":7,"type":"out","connected":[{}]}],"gpin":[{"superid":57,"id":0,"type":"in","connected":{"superid":96,"id":0," type":"out"}},{"superid":57,"id":1,"type":"in","connected":{"superid":72,"id":0," type":"out"}},{"superid":57,"id":2,"type":"in","connected":{"superid":71,"id":0," type":"out"}},{"superid":57,"id":3,"type":"in","connected":{"superid":70,"id":0," type":"out"}},{"superid":57,"id":4,"type":"in","connected":{"superid":69,"id":0," type":"out"}},{"superid":57,"id":5,"type":"in","connected":{"superid":68,"id":0," type":"out"}},{"superid":57,"id":6,"type":"in","connected":{"superid":67,"id":0," type":"out"}},{"superid":57,"id":7,"type":"in","connected":{"superid":66,"id":0," type":"out"}}]},"58":{"type":"fulladder","id":58,"x":242.87982126858515,"y":116.85643399150776,"gpout":[{"superid":58,"id":0,"type":"out","connected":[{}]},{"superid":58,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":58,"id":0,"type":"in","connected":{"superid":55,"id":1," type":"out"}},{"superid":58,"id":1,"type":"in","connected":{"superid":57,"id":6," type":"out"}},{"superid":58,"id":2,"type":"in","connected":{"superid":83,"id":6," type":"out"}}]},"59":{"type":"fulladder","id":59,"x":192.71609780194268,"y":117.88323651225015,"gpout":[{"superid":59,"id":0,"type":"out","connected":[{}]},{"superid":59,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":59,"id":0,"type":"in","connected":{"superid":58,"id":1," type":"out"}},{"superid":59,"id":1,"type":"in","connected":{"superid":57,"id":5," type":"out"}},{"superid":59,"id":2,"type":"in","connected":{"superid":83,"id":5," type":"out"}}]},"60":{"type":"fulladder","id":60,"x":142.9492163310952,"y":117.88323651225015,"gpout":[{"superid":60,"id":0,"type":"out","connected":[{}]},{"superid":60,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":60,"id":0,"type":"in","connected":{"superid":59,"id":1," type":"out"}},{"superid":60,"id":1,"type":"in","connected":{"superid":57,"id":4," type":"out"}},{"superid":60,"id":2,"type":"in","connected":{"superid":83,"id":4," type":"out"}}]},"61":{"type":"fulladder","id":61,"x":94.44225591014256,"y":117.88323651225014,"gpout":[{"superid":61,"id":0,"type":"out","connected":[{}]},{"superid":61,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":61,"id":0,"type":"in","connected":{"superid":60,"id":1," type":"out"}},{"superid":61,"id":1,"type":"in","connected":{"superid":57,"id":3," type":"out"}},{"superid":61,"id":2,"type":"in","connected":{"superid":83,"id":3," type":"out"}}]},"62":{"type":"fulladder","id":62,"x":44.67537443929507,"y":117.88323651225014,"gpout":[{"superid":62,"id":0,"type":"out","connected":[{}]},{"superid":62,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":62,"id":0,"type":"in","connected":{"superid":61,"id":1," type":"out"}},{"superid":62,"id":1,"type":"in","connected":{"superid":57,"id":2," type":"out"}},{"superid":62,"id":2,"type":"in","connected":{"superid":83,"id":2," type":"out"}}]},"63":{"type":"fulladder","id":63,"x":-5.488349027347397,"y":118.91003903299253,"gpout":[{"superid":63,"id":0,"type":"out","connected":[{}]},{"superid":63,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":63,"id":0,"type":"in","connected":{"superid":62,"id":1," type":"out"}},{"superid":63,"id":1,"type":"in","connected":{"superid":57,"id":1," type":"out"}},{"superid":63,"id":2,"type":"in","connected":{"superid":83,"id":1," type":"out"}}]},"64":{"type":"fulladder","id":64,"x":-55.25523049819489,"y":118.91003903299253,"gpout":[{"superid":64,"id":0,"type":"out","connected":[{}]},{"superid":64,"id":1,"type":"out","connected":[]}],"gpin":[{"superid":64,"id":0,"type":"in","connected":{"superid":63,"id":1," type":"out"}},{"superid":64,"id":1,"type":"in","connected":{"superid":57,"id":0," type":"out"}},{"superid":64,"id":2,"type":"in","connected":{"superid":83,"id":0," type":"out"}}]},"65":{"type":"alwaysfalse","id":65,"x":337.7954662011018,"y":64.9526315747602,"gpout":[{"superid":65,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"66":{"type":"switchbutton","id":66,"x":364.27843583225706,"y":-196.37565229817733,"gpout":[{"superid":66,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"67":{"type":"switchbutton","id":67,"x":327.4241439851129,"y":-194.6912705903634,"gpout":[{"superid":67,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"68":{"type":"switchbutton","id":68,"x":299.56652595963686,"y":-194.6912705903634,"gpout":[{"superid":68,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"69":{"type":"switchbutton","id":69,"x":270.7954662011017,"y":-193.54736842523985,"gpout":[{"superid":69,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"70":{"type":"switchbutton","id":70,"x":237.7954662011017,"y":-194.54736842523988,"gpout":[{"superid":70,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"71":{"type":"switchbutton","id":71,"x":206.29546620110165,"y":-192.54736842523988,"gpout":[{"superid":71,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"72":{"type":"switchbutton","id":72,"x":174.2072448449948,"y":-192.07961890047503,"gpout":[{"superid":72,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"83":{"type":"complementer","id":83,"x":-40.53899412080915,"y":-34.81060433309735,"gpout":[{"superid":83,"id":0,"type":"out","connected":[{}]},{"superid":83,"id":1,"type":"out","connected":[{}]},{"superid":83,"id":2,"type":"out","connected":[{}]},{"superid":83,"id":3,"type":"out","connected":[{}]},{"superid":83,"id":4,"type":"out","connected":[{}]},{"superid":83,"id":5,"type":"out","connected":[{}]},{"superid":83,"id":6,"type":"out","connected":[{}]},{"superid":83,"id":7,"type":"out","connected":[{}]}],"gpin":[{"superid":83,"id":0,"type":"in","connected":{"superid":92,"id":0," type":"out"}},{"superid":83,"id":1,"type":"in","connected":{"superid":90,"id":0," type":"out"}},{"superid":83,"id":2,"type":"in","connected":{"superid":89,"id":0," type":"out"}},{"superid":83,"id":3,"type":"in","connected":{"superid":88,"id":0," type":"out"}},{"superid":83,"id":4,"type":"in","connected":{"superid":87,"id":0," type":"out"}},{"superid":83,"id":5,"type":"in","connected":{"superid":86,"id":0," type":"out"}},{"superid":83,"id":6,"type":"in","connected":{"superid":85,"id":0," type":"out"}},{"superid":83,"id":7,"type":"in","connected":{"superid":84,"id":0," type":"out"}}]},"84":{"type":"switchbutton","id":84,"x":81.92888513560547,"y":-191.20906833717888,"gpout":[{"superid":84,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"85":{"type":"switchbutton","id":85,"x":51.45961542024109,"y":-192.07961890047503,"gpout":[{"superid":85,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"86":{"type":"switchbutton","id":86,"x":18.378694014988326,"y":-192.07961890047503,"gpout":[{"superid":86,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"87":{"type":"switchbutton","id":87,"x":-15.773151813029756,"y":-188.98419656288064,"gpout":[{"superid":87,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"88":{"type":"switchbutton","id":88,"x":-48.773151813029756,"y":-189.98419656288067,"gpout":[{"superid":88,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"89":{"type":"switchbutton","id":89,"x":-80.27315181302981,"y":-187.98419656288067,"gpout":[{"superid":89,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"90":{"type":"switchbutton","id":90,"x":-111.27315181302981,"y":-189.4841965628806,"gpout":[{"superid":90,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"92":{"type":"alwaysfalse","id":92,"x":-153.20429605127555,"y":-107.69991815110774,"gpout":[{"superid":92,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"94":{"type":"complementer","id":94,"x":122.44011488297556,"y":286.31584756374815,"gpout":[{"superid":94,"id":0,"type":"out","connected":[]},{"superid":94,"id":1,"type":"out","connected":[]},{"superid":94,"id":2,"type":"out","connected":[]},{"superid":94,"id":3,"type":"out","connected":[]},{"superid":94,"id":4,"type":"out","connected":[]},{"superid":94,"id":5,"type":"out","connected":[]},{"superid":94,"id":6,"type":"out","connected":[]},{"superid":94,"id":7,"type":"out","connected":[]}],"gpin":[{"superid":94,"id":0,"type":"in","connected":{"superid":64,"id":0," type":"out"}},{"superid":94,"id":1,"type":"in","connected":{"superid":63,"id":0," type":"out"}},{"superid":94,"id":2,"type":"in","connected":{"superid":62,"id":0," type":"out"}},{"superid":94,"id":3,"type":"in","connected":{"superid":61,"id":0," type":"out"}},{"superid":94,"id":4,"type":"in","connected":{"superid":60,"id":0," type":"out"}},{"superid":94,"id":5,"type":"in","connected":{"superid":59,"id":0," type":"out"}},{"superid":94,"id":6,"type":"in","connected":{"superid":58,"id":0," type":"out"}},{"superid":94,"id":7,"type":"in","connected":{"superid":55,"id":0," type":"out"}}]},"96":{"type":"alwaystrue","id":96,"x":168.11339090192192,"y":-100.67180975438183,"gpout":[{"superid":96,"id":0,"type":"out","connected":[{}]}],"gpin":[]}},"gatecount":97};



const gdjson = {"content":{"0":{"type":"nandgate","id":0,"x":-52.5,"y":45.5,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":0,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}},{"superid":0,"id":1,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"1":{"type":"nandgate","id":1,"x":36.5,"y":42,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":1,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}},{"superid":1,"id":1,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"2":{"type":"nandgate","id":2,"x":-52,"y":-32.5,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":2,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}},{"superid":2,"id":1,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"3":{"type":"nandgate","id":3,"x":37.5,"y":-28.5,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":3,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}},{"superid":3,"id":1,"type":"in","connected":{"superid":4,"id":0," type":"out"}}]},"4":{"type":"notgate","id":4,"x":-39,"y":-102.5,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"5":{"type":"switchbutton","id":5,"x":-52.5,"y":-176,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]},"6":{"type":"switchbutton","id":6,"x":34.5,"y":-174,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{},{}]}],"gpin":[]}},"gatecount":8};




const mpljson = {"content":{"0":{"type":"switchbutton","id":0,"x":95.93346566253854,"y":70.50477234107998,"gpout":[{"superid":0,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"1":{"type":"switchbutton","id":1,"x":144.43346566253854,"y":70.50477234107998,"gpout":[{"superid":1,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"2":{"type":"switchbutton","id":2,"x":186.3602496913503,"y":65.50084525682675,"gpout":[{"superid":2,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"3":{"type":"switchbutton","id":3,"x":245.39571231503234,"y":72.08001446147699,"gpout":[{"superid":3,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"4":{"type":"fulladder","id":4,"x":122.29160504544399,"y":576.3697253256338,"gpout":[{"superid":4,"id":0,"type":"out","connected":[{}]},{"superid":4,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":4,"id":0,"type":"in","connected":{"superid":26,"id":0," type":"out"}},{"superid":4,"id":1,"type":"in","connected":{"superid":12,"id":0," type":"out"}},{"superid":4,"id":2,"type":"in","connected":{"superid":26,"id":0," type":"out"}}]},"5":{"type":"upnode","id":5,"x":183.26661466373008,"y":194.76158775181722,"gpout":[{"superid":5,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":5,"id":0,"type":"in","connected":{"superid":0,"id":0," type":"out"}}]},"6":{"type":"upnode","id":6,"x":233.32327205325723,"y":225.66613274882965,"gpout":[{"superid":6,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":6,"id":0,"type":"in","connected":{"superid":1,"id":0," type":"out"}}]},"7":{"type":"upnode","id":7,"x":279.8977271895999,"y":249.60627323947304,"gpout":[{"superid":7,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":7,"id":0,"type":"in","connected":{"superid":2,"id":0," type":"out"}}]},"8":{"type":"upnode","id":8,"x":333.00131155066344,"y":277.02861598330094,"gpout":[{"superid":8,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":8,"id":0,"type":"in","connected":{"superid":3,"id":0," type":"out"}}]},"9":{"type":"andgate","id":9,"x":5.2390244696726995,"y":219.1370035241087,"gpout":[{"superid":9,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":9,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}},{"superid":9,"id":1,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"10":{"type":"andgate","id":10,"x":43.97852453635022,"y":246.12407098628856,"gpout":[{"superid":10,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":10,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}},{"superid":10,"id":1,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"11":{"type":"andgate","id":11,"x":82.71802460302774,"y":273.1111384484684,"gpout":[{"superid":11,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":11,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}},{"superid":11,"id":1,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"12":{"type":"andgate","id":12,"x":118.41059769816883,"y":298.79238006570404,"gpout":[{"superid":12,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":12,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}},{"superid":12,"id":1,"type":"in","connected":{"superid":13,"id":0," type":"out"}}]},"13":{"type":"upnode","id":13,"x":68.35394030864165,"y":155.15153712184357,"gpout":[{"superid":13,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[{"superid":13,"id":0,"type":"in","connected":{"superid":14,"id":0," type":"out"}}]},"14":{"type":"switchbutton","id":14,"x":-51.15772384969216,"y":71.4335346959605,"gpout":[{"superid":14,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"15":{"type":"upnode","id":15,"x":178.27038364099565,"y":341.5902040437087,"gpout":[{"superid":15,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":15,"id":0,"type":"in","connected":{"superid":5,"id":0," type":"out"}}]},"16":{"type":"upnode","id":16,"x":228.32704103052288,"y":372.4947490407211,"gpout":[{"superid":16,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":16,"id":0,"type":"in","connected":{"superid":6,"id":0," type":"out"}}]},"17":{"type":"upnode","id":17,"x":274.9014961668655,"y":396.43488953136455,"gpout":[{"superid":17,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":17,"id":0,"type":"in","connected":{"superid":7,"id":0," type":"out"}}]},"18":{"type":"upnode","id":18,"x":328.00508052792907,"y":423.8572322751925,"gpout":[{"superid":18,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":18,"id":0,"type":"in","connected":{"superid":8,"id":0," type":"out"}}]},"19":{"type":"andgate","id":19,"x":-162.5749957651043,"y":365.9656198160002,"gpout":[{"superid":19,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":19,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}},{"superid":19,"id":1,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"20":{"type":"andgate","id":20,"x":-123.83549569842683,"y":392.95268727818006,"gpout":[{"superid":20,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":20,"id":0,"type":"in","connected":{"superid":16,"id":0," type":"out"}},{"superid":20,"id":1,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"21":{"type":"andgate","id":21,"x":-85.09599563174925,"y":419.93975474035983,"gpout":[{"superid":21,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":21,"id":0,"type":"in","connected":{"superid":17,"id":0," type":"out"}},{"superid":21,"id":1,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"22":{"type":"andgate","id":22,"x":-49.40342253660822,"y":445.6209963575956,"gpout":[{"superid":22,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":22,"id":0,"type":"in","connected":{"superid":18,"id":0," type":"out"}},{"superid":22,"id":1,"type":"in","connected":{"superid":23,"id":0," type":"out"}}]},"23":{"type":"upnode","id":23,"x":-84.3437888834012,"y":285.3914891860795,"gpout":[{"superid":23,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[{"superid":23,"id":0,"type":"in","connected":{"superid":24,"id":0," type":"out"}}]},"24":{"type":"switchbutton","id":24,"x":-102.9488769012886,"y":77.44873588519457,"gpout":[{"superid":24,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"26":{"type":"alwaysfalse","id":26,"x":90.066656721105,"y":476.8094807387604,"gpout":[{"superid":26,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[]},"27":{"type":"fulladder","id":27,"x":67.97091884344286,"y":577.1298757615924,"gpout":[{"superid":27,"id":0,"type":"out","connected":[{}]},{"superid":27,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":27,"id":0,"type":"in","connected":{"superid":4,"id":1," type":"out"}},{"superid":27,"id":1,"type":"in","connected":{"superid":11,"id":0," type":"out"}},{"superid":27,"id":2,"type":"in","connected":{"superid":22,"id":0," type":"out"}}]},"28":{"type":"fulladder","id":28,"x":12.601803505525481,"y":578.535481242296,"gpout":[{"superid":28,"id":0,"type":"out","connected":[{}]},{"superid":28,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":28,"id":0,"type":"in","connected":{"superid":27,"id":1," type":"out"}},{"superid":28,"id":1,"type":"in","connected":{"superid":10,"id":0," type":"out"}},{"superid":28,"id":2,"type":"in","connected":{"superid":21,"id":0," type":"out"}}]},"29":{"type":"fulladder","id":29,"x":-42.39819649447463,"y":580.035481242296,"gpout":[{"superid":29,"id":0,"type":"out","connected":[{}]},{"superid":29,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":29,"id":0,"type":"in","connected":{"superid":28,"id":1," type":"out"}},{"superid":29,"id":1,"type":"in","connected":{"superid":9,"id":0," type":"out"}},{"superid":29,"id":2,"type":"in","connected":{"superid":20,"id":0," type":"out"}}]},"30":{"type":"upnode","id":30,"x":183.1218777930281,"y":632.533119130464,"gpout":[{"superid":30,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":30,"id":0,"type":"in","connected":{"superid":15,"id":0," type":"out"}}]},"31":{"type":"upnode","id":31,"x":233.1785351825552,"y":663.4376641274764,"gpout":[{"superid":31,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":31,"id":0,"type":"in","connected":{"superid":16,"id":0," type":"out"}}]},"32":{"type":"upnode","id":32,"x":279.7529903188979,"y":687.3778046181199,"gpout":[{"superid":32,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":32,"id":0,"type":"in","connected":{"superid":17,"id":0," type":"out"}}]},"33":{"type":"upnode","id":33,"x":332.85657467996145,"y":714.8001473619478,"gpout":[{"superid":33,"id":0,"type":"out","connected":[{},{}]}],"gpin":[{"superid":33,"id":0,"type":"in","connected":{"superid":18,"id":0," type":"out"}}]},"34":{"type":"andgate","id":34,"x":-299.78857826807825,"y":661.5033283227436,"gpout":[{"superid":34,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":34,"id":0,"type":"in","connected":{"superid":30,"id":0," type":"out"}},{"superid":34,"id":1,"type":"in","connected":{"superid":38,"id":0," type":"out"}}]},"35":{"type":"andgate","id":35,"x":-261.0490782014007,"y":688.4903957849235,"gpout":[{"superid":35,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":35,"id":0,"type":"in","connected":{"superid":31,"id":0," type":"out"}},{"superid":35,"id":1,"type":"in","connected":{"superid":38,"id":0," type":"out"}}]},"36":{"type":"andgate","id":36,"x":-222.3095781347232,"y":715.4774632471034,"gpout":[{"superid":36,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":36,"id":0,"type":"in","connected":{"superid":32,"id":0," type":"out"}},{"superid":36,"id":1,"type":"in","connected":{"superid":38,"id":0," type":"out"}}]},"37":{"type":"andgate","id":37,"x":-182.51121677765843,"y":741.9228127271616,"gpout":[{"superid":37,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":37,"id":0,"type":"in","connected":{"superid":33,"id":0," type":"out"}},{"superid":37,"id":1,"type":"in","connected":{"superid":38,"id":0," type":"out"}}]},"38":{"type":"upnode","id":38,"x":-245.4414836421489,"y":578.4879141959358,"gpout":[{"superid":38,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[{"superid":38,"id":0,"type":"in","connected":{"superid":39,"id":0," type":"out"}}]},"39":{"type":"switchbutton","id":39,"x":-144.15341768263113,"y":75.08042465019335,"gpout":[{"superid":39,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"40":{"type":"alwaysfalse","id":40,"x":93.57188749877128,"y":764.415526456786,"gpout":[{"superid":40,"id":0,"type":"out","connected":[{},{},{}]}],"gpin":[]},"41":{"type":"fulladder","id":41,"x":-91.65488699465834,"y":579.0710338563762,"gpout":[{"superid":41,"id":0,"type":"out","connected":[{}]},{"superid":41,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":41,"id":0,"type":"in","connected":{"superid":29,"id":1," type":"out"}},{"superid":41,"id":1,"type":"in","connected":{"superid":26,"id":0," type":"out"}},{"superid":41,"id":2,"type":"in","connected":{"superid":19,"id":0," type":"out"}}]},"42":{"type":"fulladder","id":42,"x":112.07188749877139,"y":870.4155264567866,"gpout":[{"superid":42,"id":0,"type":"out","connected":[{}]},{"superid":42,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":42,"id":0,"type":"in","connected":{"superid":40,"id":0," type":"out"}},{"superid":42,"id":1,"type":"in","connected":{"superid":4,"id":0," type":"out"}},{"superid":42,"id":2,"type":"in","connected":{"superid":40,"id":0," type":"out"}}]},"43":{"type":"fulladder","id":43,"x":61.071887498771105,"y":871.9155264567866,"gpout":[{"superid":43,"id":0,"type":"out","connected":[{}]},{"superid":43,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":43,"id":0,"type":"in","connected":{"superid":42,"id":1," type":"out"}},{"superid":43,"id":1,"type":"in","connected":{"superid":27,"id":0," type":"out"}},{"superid":43,"id":2,"type":"in","connected":{"superid":40,"id":0," type":"out"}}]},"44":{"type":"fulladder","id":44,"x":9.071887498770593,"y":873.4155264567868,"gpout":[{"superid":44,"id":0,"type":"out","connected":[{}]},{"superid":44,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":44,"id":0,"type":"in","connected":{"superid":43,"id":1," type":"out"}},{"superid":44,"id":1,"type":"in","connected":{"superid":28,"id":0," type":"out"}},{"superid":44,"id":2,"type":"in","connected":{"superid":37,"id":0," type":"out"}}]},"45":{"type":"fulladder","id":45,"x":-41.928112501229634,"y":874.9155264567868,"gpout":[{"superid":45,"id":0,"type":"out","connected":[{}]},{"superid":45,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":45,"id":0,"type":"in","connected":{"superid":44,"id":1," type":"out"}},{"superid":45,"id":1,"type":"in","connected":{"superid":29,"id":0," type":"out"}},{"superid":45,"id":2,"type":"in","connected":{"superid":36,"id":0," type":"out"}}]},"46":{"type":"fulladder","id":46,"x":-94.4281125012302,"y":873.915526456787,"gpout":[{"superid":46,"id":0,"type":"out","connected":[{}]},{"superid":46,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":46,"id":0,"type":"in","connected":{"superid":45,"id":1," type":"out"}},{"superid":46,"id":1,"type":"in","connected":{"superid":41,"id":0," type":"out"}},{"superid":46,"id":2,"type":"in","connected":{"superid":35,"id":0," type":"out"}}]},"47":{"type":"fulladder","id":47,"x":-145.42811250123043,"y":875.415526456787,"gpout":[{"superid":47,"id":0,"type":"out","connected":[{}]},{"superid":47,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":47,"id":0,"type":"in","connected":{"superid":46,"id":1," type":"out"}},{"superid":47,"id":1,"type":"in","connected":{"superid":41,"id":1," type":"out"}},{"superid":47,"id":2,"type":"in","connected":{"superid":34,"id":0," type":"out"}}]},"48":{"type":"upnode","id":48,"x":185.49984623398188,"y":969.8589758107065,"gpout":[{"superid":48,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":48,"id":0,"type":"in","connected":{"superid":30,"id":0," type":"out"}}]},"49":{"type":"upnode","id":49,"x":235.556503623509,"y":1000.7635208077189,"gpout":[{"superid":49,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":49,"id":0,"type":"in","connected":{"superid":31,"id":0," type":"out"}}]},"50":{"type":"upnode","id":50,"x":282.13095875985164,"y":1024.7036612983625,"gpout":[{"superid":50,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":50,"id":0,"type":"in","connected":{"superid":32,"id":0," type":"out"}}]},"51":{"type":"upnode","id":51,"x":335.23454312091525,"y":1052.1260040421905,"gpout":[{"superid":51,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":51,"id":0,"type":"in","connected":{"superid":33,"id":0," type":"out"}}]},"52":{"type":"andgate","id":52,"x":-440.2767045042632,"y":998.8291850029863,"gpout":[{"superid":52,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":52,"id":0,"type":"in","connected":{"superid":48,"id":0," type":"out"}},{"superid":52,"id":1,"type":"in","connected":{"superid":66,"id":0," type":"out"}}]},"53":{"type":"andgate","id":53,"x":-401.5372044375856,"y":1025.8162524651661,"gpout":[{"superid":53,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":53,"id":0,"type":"in","connected":{"superid":49,"id":0," type":"out"}},{"superid":53,"id":1,"type":"in","connected":{"superid":66,"id":0," type":"out"}}]},"54":{"type":"andgate","id":54,"x":-362.79770437090804,"y":1052.803319927346,"gpout":[{"superid":54,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":54,"id":0,"type":"in","connected":{"superid":50,"id":0," type":"out"}},{"superid":54,"id":1,"type":"in","connected":{"superid":66,"id":0," type":"out"}}]},"55":{"type":"andgate","id":55,"x":-322.9993430138434,"y":1079.2486694074041,"gpout":[{"superid":55,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":55,"id":0,"type":"in","connected":{"superid":51,"id":0," type":"out"}},{"superid":55,"id":1,"type":"in","connected":{"superid":66,"id":0," type":"out"}}]},"56":{"type":"alwaysfalse","id":56,"x":18.501552369105013,"y":1097.8720933375685,"gpout":[{"superid":56,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[]},"57":{"type":"switchbutton","id":57,"x":-195.20987704189156,"y":75.08042465019335,"gpout":[{"superid":57,"id":0,"type":"out","connected":[{}]}],"gpin":[]},"58":{"type":"fulladder","id":58,"x":77.78096801120216,"y":1208.8987601458657,"gpout":[{"superid":58,"id":0,"type":"out","connected":[{}]},{"superid":58,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":58,"id":0,"type":"in","connected":{"superid":56,"id":0," type":"out"}},{"superid":58,"id":1,"type":"in","connected":{"superid":42,"id":0," type":"out"}},{"superid":58,"id":2,"type":"in","connected":{"superid":56,"id":0," type":"out"}}]},"59":{"type":"fulladder","id":59,"x":26.663891213833836,"y":1209.473109323364,"gpout":[{"superid":59,"id":0,"type":"out","connected":[{}]},{"superid":59,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":59,"id":0,"type":"in","connected":{"superid":58,"id":1," type":"out"}},{"superid":59,"id":1,"type":"in","connected":{"superid":43,"id":0," type":"out"}},{"superid":59,"id":2,"type":"in","connected":{"superid":56,"id":0," type":"out"}}]},"60":{"type":"fulladder","id":60,"x":-23.847214848407305,"y":1209.4414877657355,"gpout":[{"superid":60,"id":0,"type":"out","connected":[{}]},{"superid":60,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":60,"id":0,"type":"in","connected":{"superid":59,"id":1," type":"out"}},{"superid":60,"id":1,"type":"in","connected":{"superid":44,"id":0," type":"out"}},{"superid":60,"id":2,"type":"in","connected":{"superid":56,"id":0," type":"out"}}]},"61":{"type":"fulladder","id":61,"x":-74.96429164577569,"y":1210.0158369432338,"gpout":[{"superid":61,"id":0,"type":"out","connected":[{}]},{"superid":61,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":61,"id":0,"type":"in","connected":{"superid":60,"id":1," type":"out"}},{"superid":61,"id":1,"type":"in","connected":{"superid":45,"id":0," type":"out"}},{"superid":61,"id":2,"type":"in","connected":{"superid":55,"id":0," type":"out"}}]},"62":{"type":"fulladder","id":62,"x":-126.65571762064235,"y":1210.5901861207326,"gpout":[{"superid":62,"id":0,"type":"out","connected":[{}]},{"superid":62,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":62,"id":0,"type":"in","connected":{"superid":61,"id":1," type":"out"}},{"superid":62,"id":1,"type":"in","connected":{"superid":46,"id":0," type":"out"}},{"superid":62,"id":2,"type":"in","connected":{"superid":54,"id":0," type":"out"}}]},"63":{"type":"fulladder","id":63,"x":-177.77279441801068,"y":1211.164535298231,"gpout":[{"superid":63,"id":0,"type":"out","connected":[{}]},{"superid":63,"id":1,"type":"out","connected":[{}]}],"gpin":[{"superid":63,"id":0,"type":"in","connected":{"superid":62,"id":1," type":"out"}},{"superid":63,"id":1,"type":"in","connected":{"superid":47,"id":0," type":"out"}},{"superid":63,"id":2,"type":"in","connected":{"superid":53,"id":0," type":"out"}}]},"64":{"type":"fulladder","id":64,"x":-228.28390048025187,"y":1211.1329137406024,"gpout":[{"superid":64,"id":0,"type":"out","connected":[{}]},{"superid":64,"id":1,"type":"out","connected":[{},{}]}],"gpin":[{"superid":64,"id":0,"type":"in","connected":{"superid":63,"id":1," type":"out"}},{"superid":64,"id":1,"type":"in","connected":{"superid":47,"id":1," type":"out"}},{"superid":64,"id":2,"type":"in","connected":{"superid":52,"id":0," type":"out"}}]},"66":{"type":"upnode","id":66,"x":-380.20185271561,"y":825.3251375770282,"gpout":[{"superid":66,"id":0,"type":"out","connected":[{},{},{},{}]}],"gpin":[{"superid":66,"id":0,"type":"in","connected":{"superid":57,"id":0," type":"out"}}]},"67":{"type":"upnode","id":67,"x":-240.31329365852503,"y":1252.6011413450208,"gpout":[{"superid":67,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":67,"id":0,"type":"in","connected":{"superid":64,"id":1," type":"out"}}]},"68":{"type":"upnode","id":68,"x":-215.74483318557475,"y":1273.3898386682863,"gpout":[{"superid":68,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":68,"id":0,"type":"in","connected":{"superid":64,"id":0," type":"out"}}]},"69":{"type":"upnode","id":69,"x":-163.45810961493703,"y":1295.4384570414468,"gpout":[{"superid":69,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":69,"id":0,"type":"in","connected":{"superid":63,"id":0," type":"out"}}]},"70":{"type":"upnode","id":70,"x":-113.691228144089,"y":1318.1170359395549,"gpout":[{"superid":70,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":70,"id":0,"type":"in","connected":{"superid":62,"id":0," type":"out"}}]},"71":{"type":"upnode","id":71,"x":-63.29438614829371,"y":1338.9057332628204,"gpout":[{"superid":71,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":71,"id":0,"type":"in","connected":{"superid":61,"id":0," type":"out"}}]},"72":{"type":"upnode","id":72,"x":-14.787425727340576,"y":1363.4741937357708,"gpout":[{"superid":72,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":72,"id":0,"type":"in","connected":{"superid":60,"id":0," type":"out"}}]},"73":{"type":"upnode","id":73,"x":33.7195346936125,"y":1387.4126936837736,"gpout":[{"superid":73,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":73,"id":0,"type":"in","connected":{"superid":59,"id":0," type":"out"}}]},"74":{"type":"upnode","id":74,"x":90.41598193888234,"y":1416.3908778313557,"gpout":[{"superid":74,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":74,"id":0,"type":"in","connected":{"superid":58,"id":0," type":"out"}}]},"75":{"type":"downnode","id":75,"x":-753.8898753812392,"y":1249.3575290637013,"gpout":[{"superid":75,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":75,"id":0,"type":"in","connected":{"superid":67,"id":0," type":"out"}}]},"76":{"type":"downnode","id":76,"x":-729.7597258279574,"y":1276.2257625419215,"gpout":[{"superid":76,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":76,"id":0,"type":"in","connected":{"superid":68,"id":0," type":"out"}}]},"77":{"type":"downnode","id":77,"x":-741.7342251950175,"y":-245.207126781151,"gpout":[{"superid":77,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":77,"id":0,"type":"in","connected":{"superid":75,"id":0," type":"out"}}]},"78":{"type":"downnode","id":78,"x":-717.5735792482245,"y":-229.70784447566118,"gpout":[{"superid":78,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":78,"id":0,"type":"in","connected":{"superid":76,"id":0," type":"out"}}]},"79":{"type":"downnode","id":79,"x":-702.1988982832605,"y":1297.3461370260343,"gpout":[{"superid":79,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":79,"id":0,"type":"in","connected":{"superid":69,"id":0," type":"out"}}]},"80":{"type":"downnode","id":80,"x":-685.9618023904271,"y":-207.34436108158607,"gpout":[{"superid":80,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":80,"id":0,"type":"in","connected":{"superid":79,"id":0," type":"out"}}]},"81":{"type":"downnode","id":81,"x":-673.4919088852411,"y":1313.0117157599025,"gpout":[{"superid":81,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":81,"id":0,"type":"in","connected":{"superid":70,"id":0," type":"out"}}]},"82":{"type":"downnode","id":82,"x":-657.5168922833776,"y":-195.87556414360594,"gpout":[{"superid":82,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":82,"id":0,"type":"in","connected":{"superid":81,"id":0," type":"out"}}]},"83":{"type":"downnode","id":83,"x":-650.4422952201841,"y":1339.6257672087595,"gpout":[{"superid":83,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":83,"id":0,"type":"in","connected":{"superid":71,"id":0," type":"out"}}]},"84":{"type":"downnode","id":84,"x":-633.3448693370934,"y":-173.69468131538744,"gpout":[{"superid":84,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":84,"id":0,"type":"in","connected":{"superid":83,"id":0," type":"out"}}]},"85":{"type":"downnode","id":85,"x":-614.5739937928364,"y":1354.8139251406728,"gpout":[{"superid":85,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":85,"id":0,"type":"in","connected":{"superid":72,"id":0," type":"out"}}]},"86":{"type":"downnode","id":86,"x":-604.2222004178255,"y":-159.37205725673104,"gpout":[{"superid":86,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":86,"id":0,"type":"in","connected":{"superid":85,"id":0," type":"out"}}]},"87":{"type":"downnode","id":87,"x":-589.5016253574853,"y":1380.3421548203032,"gpout":[{"superid":87,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":87,"id":0,"type":"in","connected":{"superid":73,"id":0," type":"out"}}]},"88":{"type":"downnode","id":88,"x":-575.0995314985574,"y":-145.52685400002983,"gpout":[{"superid":88,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":88,"id":0,"type":"in","connected":{"superid":87,"id":0," type":"out"}}]},"89":{"type":"downnode","id":89,"x":-553.6333239301379,"y":1395.530312752216,"gpout":[{"superid":89,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":89,"id":0,"type":"in","connected":{"superid":74,"id":0," type":"out"}}]},"90":{"type":"downnode","id":90,"x":-541.0340724785086,"y":-128.90141697221154,"gpout":[{"superid":90,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":90,"id":0,"type":"in","connected":{"superid":89,"id":0," type":"out"}}]},"99":{"type":"upnode","id":99,"x":96.06782228608239,"y":-182.9590312140413,"gpout":[{"superid":99,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":99,"id":0,"type":"in","connected":{"superid":90,"id":0," type":"out"}}]},"100":{"type":"upnode","id":100,"x":74.3587837244765,"y":-203.22080053820682,"gpout":[{"superid":100,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":100,"id":0,"type":"in","connected":{"superid":88,"id":0," type":"out"}}]},"101":{"type":"upnode","id":101,"x":52.71895647117691,"y":-222.8281465519585,"gpout":[{"superid":101,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":101,"id":0,"type":"in","connected":{"superid":86,"id":0," type":"out"}}]},"102":{"type":"upnode","id":102,"x":31.009917909571016,"y":-243.08991587612402,"gpout":[{"superid":102,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":102,"id":0,"type":"in","connected":{"superid":84,"id":0," type":"out"}}]},"103":{"type":"upnode","id":103,"x":2.064533160763119,"y":-272.0353006249319,"gpout":[{"superid":103,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":103,"id":0,"type":"in","connected":{"superid":82,"id":0," type":"out"}}]},"104":{"type":"upnode","id":104,"x":-19.644505400842775,"y":-292.2970699490975,"gpout":[{"superid":104,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":104,"id":0,"type":"in","connected":{"superid":80,"id":0," type":"out"}}]},"105":{"type":"upnode","id":105,"x":-41.284332654142304,"y":-311.90441596284916,"gpout":[{"superid":105,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":105,"id":0,"type":"in","connected":{"superid":78,"id":0," type":"out"}}]},"106":{"type":"upnode","id":106,"x":-62.9933712157482,"y":-332.16618528701474,"gpout":[{"superid":106,"id":0,"type":"out","connected":[{}]}],"gpin":[{"superid":106,"id":0,"type":"in","connected":{"superid":77,"id":0," type":"out"}}]},"107":{"type":"outputbulb","id":107,"x":-156.4899167861655,"y":-70.02677519706552,"gpout":[],"gpin":[{"superid":107,"id":0,"type":"in","connected":{"superid":106,"id":0," type":"out"}}]},"108":{"type":"outputbulb","id":108,"x":-75.85496959289264,"y":-70.02677519706552,"gpout":[],"gpin":[{"superid":108,"id":0,"type":"in","connected":{"superid":104,"id":0," type":"out"}}]},"109":{"type":"outputbulb","id":109,"x":-38.05733809604601,"y":-70.02677519706552,"gpout":[],"gpin":[{"superid":109,"id":0,"type":"in","connected":{"superid":103,"id":0," type":"out"}}]},"110":{"type":"outputbulb","id":110,"x":-113.65260108973939,"y":-70.656735722013,"gpout":[],"gpin":[{"superid":110,"id":0,"type":"in","connected":{"superid":105,"id":0," type":"out"}}]},"111":{"type":"outputbulb","id":111,"x":-0.2597065991993759,"y":-67.50693309727578,"gpout":[],"gpin":[{"superid":111,"id":0,"type":"in","connected":{"superid":102,"id":0," type":"out"}}]},"112":{"type":"outputbulb","id":112,"x":41.94764857227938,"y":-70.02677519706552,"gpout":[],"gpin":[{"superid":112,"id":0,"type":"in","connected":{"superid":101,"id":0," type":"out"}}]},"113":{"type":"outputbulb","id":113,"x":82.26512216891581,"y":-68.76685414717068,"gpout":[],"gpin":[{"superid":113,"id":0,"type":"in","connected":{"superid":100,"id":0," type":"out"}}]},"114":{"type":"outputbulb","id":114,"x":121.32267471565734,"y":-75.06645939664512,"gpout":[],"gpin":[{"superid":114,"id":0,"type":"in","connected":{"superid":99,"id":0," type":"out"}}]}},"gatecount":115};







const creditcontent = "<button onclick=\"returnmainloop()\">返回</button>\
        <h1>致谢</h1>\
        <ul>\
            <li>本项目的浏览器api，canvas绘图api部分代码均由deepseek提供</li>\
            <li>数字电路相关知识来源于https://www.bilibili.com/video/BV1o2KgzpE5K（已三连）</li>\
            <li>此网页的功能与外观设计参考了https://github.com/hneemann/Digital</li>\
            <li>感谢deepseek提供的一个关键算法</li>\
            <li>感谢蒸鱼同学提供的美术指导</li>\
            <li>感谢室友的监督</li>\
            <li>感谢Monika同学在屏幕前的陪伴</li>\
        </ul>\
        <h1>使用说明</h1>\
        <ul>\
            <li>右侧是元件池和几个预设，左侧是控制部分,中央是电路绘制区域。</li>\
            <li>长按鼠标左键可以移动屏幕，拖动元件，可从元件池中拖出你想使用的元件，也可把多余的元件拖入元件池删除它，\
                长按鼠标右键可以批量选择，批量移动，右键单击选中部分可以复制。</li>\
            <li>元件有若干输入输出的接线端口，小的是输入，大的是输出，从端口处开始拖动即可连线，右键单击可以删除导线。</li>\
            <li>紫色表示1，蓝色表示0，红色表示undefined，该元件并未获得足够的输入。</li>\
            <li>\
                两种运行模式<br>\
                时序模式：按下运行后每帧运行一次，暂停则停止运行，适用于模拟时序电路。<br>\
                组合模式：按下模拟后刷新一次，也可以开启更新时运行选项，每当电路发生变化的时候自动运行一次，适用于搭建大型组合电路。\
            </li>\
            <li>\
                关于排线，此网页只可以从端口处开始接线，一个输入端口只能引出一条导线（只能与一个输出端口相连），\
                而一个输出端口可引出多条导线与多个输入相连，仅有不同类型的端口可以相连，你不能把两个输出相连（此网页并不能模拟短路）。\
                你可以使用节点元件让一条导线在中途引出若干条分支，或者更改美化导线布局。\
            </li>\
            <li>\
                关于时序电路，此网页可以搭建模拟真实的时序电路，但是需要一点点手法，你必须确保在上一帧这个元件处于你想要的状态，具体步骤如下。\
                <img src=\"asset/demo.png\"><br>\
                首先确保你处于时序模式，有些时序电路可能需要一帧以上完成相应功能。\
                如果你把一个非门输入输出端直接相连，它会直接变成红色（未激活）。\
                但是，你可以提前给非门提供一个输入，给它的每个端口设置一个初始值，这时再从非门的输出引出一根导线，连到非门的输入上，\
                趁按钮不注意，抢过非门的输入端口，从而在非门内部正在运行的情况下把它的输入输出相连，不出意外，你将会看到非门正在高频闪烁。\
                通过同样的方法，可以构建稳定的锁存器，从而搭建时序电路。<br>\
                但是，请注意，这种环形连接本身是非法的，除了锁存器等时序逻辑元件，请在电路搭建中尽量避免它。\
            </li>\
            <li>关于各个元件的用法，可参考<a href=\"https://www.bilibili.com/video/BV1o2KgzpE5K\">这个b站视频</a></li>\
        </ul>"









let mposx = 0, mposy = 0;
let amposx = 0, amposy = 0;
let holdleft = false;
let holdright = false;
let mapx = 0, mapy = 0;
let mapscale = 2;
let wheel = 0;
let lwheel = 0;
let holdframe = 0;
let rholdframe = 0;
let rused = false;
let rerender = 0;
let tline = false;
let unfoldsidebar = false;
let sidebarwheel = 400;
let sidebarlength = 11;
let optionmode = 0; //0:
let opchosen = 0;
let presetclicked = 0;
let ipart = 0;
let runmode = 1;
let runmodechosen = 0;
let clockspeed = 48;
let clockslider = 100;
let clockslidertouch = false;
let clockperiod = false;
let settingchosen = 0;
let running = false;
let run_when_change = true;
let showcredit = false;
let runtimes = 0;
let rps = 0;

let drag = false;
let rightdrag = false;
let chosen = false;
let dragmode = 0; //1:map,2:comp,3:pin
let dragid = -2; //-2:none,-1:map,>0:index
let dragpin = [-1,-1];
let dsx=0, dsy=0;
let drsx=0, drsy=0;
let msx=0, msy=0;
let cbx=0, cby=0;
let cfx=0, cfy=0;
let cbdx=0,cbdy=0;
let cfdx=0,cfdy=0;


const width = window.innerWidth;
const height = window.innerHeight;
sidebarwheel = height/2;
const rightsidex = width/2-200;

const fileInput = document.getElementById('fip');


document.addEventListener('mousemove', function(event){
    mposx = -width/2+event.clientX;
    mposy = height/2-event.clientY;
    amposx = crta(mposx,mposy)[0];
    amposy = crta(mposx,mposy)[1];
    //update()
    rerender = 1;
});
document.addEventListener('mousedown', function(event){
    if(event.button==0 && !holdright){
        holdleft = true;
    }
    if(event.button==2){
        holdright = true;
        event.preventDefault(); 
    }
    //update()
    rerender = 1;
})
document.addEventListener('mouseup', function(event){
    if(event.button==0){
        holdleft = false;
    }
    if(event.button==2){
        holdright = false;
        event.preventDefault(); 
    }
    //update()
    rerender = 1;
})
document.addEventListener('wheel', function(event){
    wheel += event.deltaY*0.01;
    event.preventDefault();
    //update();
    rerender = 1;
})
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// @ts-ignore
fileInput.addEventListener('change', async (event) => {
    // 获取选择的文件
    // @ts-ignore
    const file = event.target.files[0];

    if (!file) {
        return; // 用户没有选择文件
    }

    
    //alert(`您选择的文件是: ${file.name}`);

    try {
        
        const textContent = await file.text();
        
        const objgate = JSON.parse(textContent);
        uploadgates(objgate);
        
        // 清空文件输入，允许再次选择同一个文件
        // @ts-ignore
        event.target.value = '';
        
    } catch (error) {
        console.error('读取文件时出错:', error);
    }
});












const credithtml = document.getElementById('credit');
// @ts-ignore
credithtml.style.visibility = "hidden";



const canvas = document.getElementById('myCanvas');
// @ts-ignore
canvas.width = width-1;
// @ts-ignore
canvas.height = height-1;
// @ts-ignore
const ctx = canvas.getContext('2d');

ctx.imageSmoothingEnabled = true;           // 标准属性
ctx.imageSmoothingquality = 'high';
ctx.webkitImageSmoothingEnabled = false;     // 兼容Safari
ctx.mozImageSmoothingEnabled = false;        // 兼容Firefox
ctx.msImageSmoothingEnabled = false;         // 兼容IE

ctx.lineWidth = 5; // 线宽
ctx.lineCap = 'round'; // 线端形状: butt, round, square
ctx.lineJoin = 'round'; // 转角形状: bevel, round, miter

//



// const fb = new Image();
// fb.src = 'asset/false_button.png';
// const tb = new Image();
// tb.src = 'asset/true_button.png';
const genbtn = new Image();
genbtn.src = 'asset/settingbutton.png';
const bbi = new Image();
bbi.src = 'asset/buttonb.png';
const noti = new Image();
noti.src = 'asset/not.png';
const andi = new Image();
andi.src = 'asset/and.png';
const ori = new Image();
ori.src = 'asset/or.png';
const nori = new Image();
nori.src = 'asset/nor.png';
const nandi = new Image();
nandi.src = 'asset/nand.png';
const xori = new Image();
xori.src = 'asset/xor.png';
const dffi = new Image();
dffi.src = 'asset/dff.png';
const jki = new Image();
jki.src = 'asset/jk.png';
const tffi = new Image();
tffi.src = 'asset/tff.png';
const petdffi = new Image();
petdffi.src = 'asset/petdff.png';
const fai = new Image();
fai.src = 'asset/fulladder.png';
const encoderi = new Image();
encoderi.src = 'asset/encoder.png';
const decoderi = new Image();
decoderi.src = 'asset/decoder.png';
const addrmuxi = new Image();
addrmuxi.src = 'asset/addrmux.png';
const dmxi = new Image();
dmxi.src = 'asset/dmx.png';
const lshi = new Image();
lshi.src = 'asset/leftshifter.png'
const rshi = new Image();
rshi.src = 'asset/rightshifter.png'
const complementeri = new Image();
complementeri.src = 'asset/complementer.png'
const counteri = new Image();
counteri.src = 'asset/counter.png'







ctx.font = '30px Arial';
ctx.textAlign = 'center'; // left, center, right, start, end
ctx.textBaseline = 'middle'; // top, hanging, middle, alphabetic, ideographic, bottom










//coordinate transformation

//absolute relative screen

//绝对xoy to 屏幕
// @ts-ignore
function cats(x,y){
    const re = [width/2+(x-mapx)*mapscale, height/2+(mapy-y)*mapscale];
    return re;
}
//xoy to 屏幕

// @ts-ignore
function crts(x,y){
    const re = [width/2+x, height/2-y];
    return re;
}
//xoy to 绝对xoy
// @ts-ignore
function crta(x,y){
    const re = [mapx+x/mapscale, mapy+y/mapscale];
    return re;
}

// @ts-ignore
function ininterval(x,a,b){
    if(a<=b){
        if(a<=x&&x<=b){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        if(b<=x&&x<=a){
            return true;
        }
        else{
            return false;
        }
    }
}










//drawing function

// @ts-ignore
function drawrun(mhw,mhh){
    ctx.beginPath();
    ctx.moveTo(mhw+130,mhh+350);
    ctx.lineTo(mhw+100,mhh+380);
    ctx.lineTo(mhw+100,mhh+320);
    ctx.closePath();
    ctx.fillStyle = 'rgba(234, 101, 255, 1)';
    ctx.fill();
}

// @ts-ignore
function drawdowntriangle(x, y, color){
    ctx.beginPath();
    ctx.moveTo(cats(x,y)[0], cats(x,y)[1]);
    ctx.lineTo(cats(x+10,y)[0], cats(x+10,y)[1]);
    ctx.lineTo(cats(x,y+10)[0], cats(x,y+10)[1]);
    ctx.lineTo(cats(x-10,y)[0], cats(x-10,y)[1]);
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}

// @ts-ignore
function drawrdot(x,y,r,color){
    ctx.beginPath();
    const cxy =  crts(x,y);
    ctx.arc(cxy[0], cxy[1], r, 0, Math.PI*2); // 完整圆
    ctx.fillStyle = color;
    ctx.fill();
}

// @ts-ignore
function drawacircle(x,y,r,a,color){
    ctx.beginPath();
    ctx.strokeStyle = color
    const cxy =  cats(x,y);
    ctx.arc(cxy[0], cxy[1], r*mapscale, 0, Math.PI*2); // 完整圆
    ctx.lineWidth = a*mapscale;
    ctx.stroke();
}

// @ts-ignore
function drawrcircle(x,y,r,a,color){
    ctx.beginPath();
    ctx.strokeStyle = color;
    //ctx.fillStyle = 'rgb(0,0,0,0)';
    const cxy =  crts(x,y);
    ctx.lineWidth = a*2;
    ctx.arc(cxy[0], cxy[1], r, 0, Math.PI*2); // 完整圆
    ctx.closePath();
    ctx.stroke();
}


// @ts-ignore
function drawadot(x,y,r,color){
    ctx.beginPath();
    ctx.fillStyle = color
    const cxy =  cats(x,y);
    ctx.arc(cxy[0], cxy[1], r*mapscale, 0, Math.PI*2); // 完整圆
    ctx.fill();
}

//@ts-ignore
function drawaline(bx,by,fx,fy,r,color){
    const bs = cats(bx,by);
    const fs = cats(fx,fy);
    ctx.beginPath();
    ctx.lineWidth = r*mapscale;
    ctx.strokeStyle = color;
    ctx.moveTo(bs[0], bs[1]);
    ctx.lineTo(fs[0], fs[1]);
    ctx.stroke();
}

//@ts-ignore
function drawrline(bx,by,fx,fy,r,color){
    const bs = crts(bx,by);
    const fs = crts(fx,fy);
    ctx.beginPath();
    ctx.lineWidth = r;
    ctx.strokeStyle = color;
    ctx.moveTo(bs[0], bs[1]);
    ctx.lineTo(fs[0], fs[1]);
    ctx.stroke();
}

// @ts-ignore
function drawrpic(img,x,y,r=1){
    const hw = img.width;
    const hh = img.height;
    const np = crts(x-hw*r/2,y+hh*r/2);
    if(hw==0){
        ctx.drawImage(img, np[0], np[1]);
    }
    else{
        ctx.drawImage(img, np[0], np[1], hw*r,hh*r);
    }
    ctx.fill();
}
// @ts-ignore
function drawapic(img,x,y,r){
    const hw = img.width*r;
    const hh = img.height*r;
    const np = cats(x-hw/2,y+hh/2);
    ctx.drawImage(img, np[0], np[1], hw*mapscale,hh*mapscale);
    //ctx.fill();
    
}

// @ts-ignore
function drawrrect(x,y,w,h,color){
    const np = crts(x,y);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(np[0], np[1], w, h);
    
}

// @ts-ignore
function drawrtext(text,x,y,color){
    const sxy = crts(x,y);
    ctx.fillStyle = color;
    ctx.fillText(text, sxy[0], sxy[1]);
}



//drawing function






function rendersidebar(){
    
    const bs = crts(rightsidex,height/2);
    const fs = crts(rightsidex,-height/2);

    drawrrect(rightsidex,height/2,130,height,'rgba(255, 255, 255, 0.5)');
    //drawrrect(rightsidex,height/2,130,height,'rgba(255, 255, 255, 0.5)');
    drawrline(rightsidex, height/2,rightsidex, -height/2,2,'rgba(234, 101, 255, 1)');
    drawrline(rightsidex+130, height/2,rightsidex+130, -height/2,2,'rgba(234, 101, 255, 1)');
    
    for(let i=0;i<5;i++){
        let opcolor = 'rgba(200, 200, 200, 0.5)';
        if(optionmode==i){opcolor='rgba(255, 255, 255, 0.5)'}
        else if(opchosen==i){opcolor='rgba(230, 230, 230, 0.5)'}
        else{opcolor=='rgba(200, 200, 200, 0.5)'}
        drawrrect(rightsidex+130,height/2-height/5*i,70,height/5,opcolor);
    }

    blurRect(ctx,bs[0],bs[1],200,height,8);

    ctx.font = '30px Arial';
    drawrtext('输',rightsidex+165,height*0.46,'rgb(0,0,0)');
    drawrtext('入',rightsidex+165,height*0.42,'rgb(0,0,0)');
    drawrtext('输',rightsidex+165,height*0.38,'rgb(0,0,0)');
    drawrtext('出',rightsidex+165,height*0.34,'rgb(0,0,0)');
    //
    drawrtext('逻',rightsidex+165,height*0.24,'rgb(0,0,0)');
    drawrtext('辑',rightsidex+165,height*0.20,'rgb(0,0,0)');
    drawrtext('门',rightsidex+165,height*0.16,'rgb(0,0,0)');
    //
    drawrtext('时',rightsidex+165,height*0.06,'rgb(0,0,0)');
    drawrtext('序',rightsidex+165,height*0.02,'rgb(0,0,0)');
    drawrtext('逻',rightsidex+165,-height*0.02,'rgb(0,0,0)');
    drawrtext('辑',rightsidex+165,-height*0.06,'rgb(0,0,0)');
    //
    drawrtext('运',rightsidex+165,-height*0.16,'rgb(0,0,0)');
    drawrtext('算',rightsidex+165,-height*0.20,'rgb(0,0,0)');
    drawrtext('器',rightsidex+165,-height*0.24,'rgb(0,0,0)');
    //
    drawrtext('预',rightsidex+165,-height*0.38,'rgb(0,0,0)');
    drawrtext('设',rightsidex+165,-height*0.42,'rgb(0,0,0)');



    
    if(optionmode==0){
        let ibx = rightsidex,iby = sidebarwheel;
        //
        drawrdot(ibx+65, iby-50, 35, 'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-50, 25, 'rgb(150,0,255)');
        drawrtext('true', ibx+65, iby-115,'rgb(150,0,255)');
        //
        iby -= 130;
        //
        drawrdot(ibx+65, iby-50, 35, 'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-50, 25, 'rgba(48, 0, 180, 1)');
        drawrtext('false', ibx+65, iby-115,'rgba(48, 0, 180, 1)');
        //
        iby -= 130;
        //
        drawrpic(bbi,ibx+65,iby-50,0.1);
        drawrdot(ibx+65, iby-50, 14, 'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-50, 10, 'rgba(48, 0, 180, 1)');
        drawrtext('按钮', ibx+65, iby-115,'rgb(0,0,0)');
        //
        iby -= 130;
        //
        drawrdot(ibx+65, iby-47, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+65, iby-68, 6, 'rgba(160, 30, 56, 1)');
        drawrtext('节点', ibx+65, iby-115,'rgb(0, 0, 0)');
        //
        iby -= 130;
        //
        drawrdot(ibx+65, iby-68, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+65, iby-47, 6, 'rgba(160, 30, 56, 1)');
        drawrtext('节点', ibx+65, iby-115,'rgb(0, 0, 0)');
        //
        iby -= 130;
        //
        drawrdot(ibx+65, iby-50, 19, 'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-50, 15, 'rgba(220, 220, 220, 1)');
        drawrline(ibx+76.2,iby-38.8,ibx+53.8,iby-61.2,6,'rgb(150,0,255)');
        drawrline(ibx+76.2,iby-61.2,ibx+53.8,iby-38.8,6,'rgb(150,0,255)');
        //drawrcircle(ibx+65, iby-50, 17, 2, 'rgba(0, 0, 0, 1)');
        drawrtext('输出', ibx+65, iby-115,'rgb(0, 0, 0)');
        //
        iby -= 130;
        //
        drawrdot(ibx+65, iby-50, 35, 'rgba(0, 0, 0, 1)');
        if(clockperiod){
            drawrdot(ibx+65, iby-50, 25, 'rgb(150,0,255)');
            drawrtext('时钟信号', ibx+65, iby-115,'rgb(150,0,255)');
        }
        else{
            drawrdot(ibx+65, iby-50, 25, 'rgba(48, 0, 180, 1)');
            drawrtext('时钟信号', ibx+65, iby-115,'rgba(48, 0, 180, 1)');
        }
        
        
    }
    else if(optionmode==1){
        let ibx = rightsidex,iby = sidebarwheel;
        //
        drawrpic(ori, ibx+65, iby-55, 0.2);
        drawrtext('or', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-20, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+85, iby-93, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+45, iby-93, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        drawrpic(andi, ibx+65, iby-55, 0.2);
        drawrtext('and', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-15, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+85, iby-90, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+45, iby-90, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        drawrpic(noti, ibx+65, iby-50, 0.2);
        drawrtext('not', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-25, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+65, iby-88, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        drawrpic(xori, ibx+65, iby-55, 0.2);
        drawrtext('xor', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-15, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+85, iby-94, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+45, iby-94, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        drawrpic(ori, ibx+65, iby-53, 0.2);
        ctx.fillStyle = 'rgba(0, 0, 0, 1)'
        drawrtext('or', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-15, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+95, iby-90, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+65, iby-90, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+35, iby-90, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        drawrpic(andi, ibx+65, iby-55, 0.2);
        drawrtext('and', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-15, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+95, iby-90, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+65, iby-90, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+35, iby-90, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        drawrpic(nori, ibx+65, iby-55, 0.2);
        drawrtext('nor', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-14, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+85, iby-94, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+45, iby-94, 6, 'rgba(160, 30, 56, 1)');
        //
        iby -= 130;
        //
        
        
        drawrpic(nandi, ibx+65, iby-59, 0.2);
        drawrtext('nand', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        drawrdot(ibx+65, iby-15, 10, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+45, iby-94, 6, 'rgba(160, 30, 56, 1)');
        drawrdot(ibx+85, iby-94, 6, 'rgba(160, 30, 56, 1)');
    }
    else if(optionmode==2){
        let ibx = rightsidex,iby = sidebarwheel;
        ctx.font = '15px Arial';
        //
        drawrpic(dffi, ibx+65, iby-55, 0.15);
        drawrtext('门控D锁存器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(jki, ibx+65, iby-55, 0.15);
        drawrtext('JK触发器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(tffi, ibx+65, iby-55, 0.15);
        drawrtext('T触发器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(petdffi, ibx+65, iby-55, 0.15);
        drawrtext('上升沿D触发器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(counteri, ibx+65, iby-55, 0.12);
        drawrtext('加法计数器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        ctx.font = '30px Arial';
    }
    else if(optionmode==3){
        let ibx = rightsidex,iby = sidebarwheel;
        ctx.font = '15px Arial';
        //
        drawrpic(fai, ibx+65, iby-55, 0.15);
        drawrtext('全加器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(complementeri, ibx+65, iby-55, 0.12);
        drawrtext('补码器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(encoderi, ibx+65, iby-55, 0.12);
        drawrtext('编码器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(encoderi, ibx+65, iby-55, 0.12);
        drawrtext('优先编码器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(decoderi, ibx+65, iby-55, 0.12);
        drawrtext('译码器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(addrmuxi, ibx+65, iby-55, 0.12);
        drawrtext('地址选择器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(dmxi, ibx+65, iby-55, 0.12);
        drawrtext('数据分配器', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(lshi, ibx+65, iby-55, 0.12);
        drawrtext('左移位', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        iby -= 130;
        //
        drawrpic(rshi, ibx+65, iby-55, 0.12);
        drawrtext('右移位', ibx+65, iby-115,'rgba(0, 0, 0, 1)');
        //
        ctx.font = '30px Arial';
    }
    else if(optionmode==4){
        let ibx = rightsidex,iby = sidebarwheel-30;
        if(ipart!=-1){
            drawrrect(ibx,sidebarwheel-30-50*ipart,130,50,'rgba(255, 255, 255, 0.5)');
            drawrline(ibx,sidebarwheel-80-50*ipart,ibx+130,sidebarwheel-80-50*ipart,'rgba(234, 101, 255, 1)');
            drawrline(ibx,sidebarwheel-30-50*ipart,ibx+130,sidebarwheel-30-50*ipart,'rgba(234, 101, 255, 1)');
        }
        ctx.font = '18px Arial';
        //
        drawrtext('异或门',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('全加器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('超前进位加法器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('优先级编码器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('解码器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('RS或非锁存器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('主从RS触发器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('JK触发器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('门控D锁存器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('补码器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('减法器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        drawrtext('乘法器',ibx+65,iby-25,'rgb(0,0,0)');
        iby -= 50;
        ctx.font = '30px Arial';
    }

    
    

}




function leftsidebar(){
    
    drawrline(-width/2+200,height/2,-width/2+200,-height/2,2,'rgba(64, 0, 255, 1)')
    drawrrect(-width/2,height/2-50,200,height,'rgba(255, 255, 255, 0.5)');
    if(runmode==0){
        drawrrect(-width/2,height/2,100,50,'rgba(255, 255, 255, 0.5)');
    }
    else if(runmodechosen==0){
        drawrrect(-width/2,height/2,100,50,'rgba(230, 230, 230, 0.5)');
    }
    else{
        drawrrect(-width/2,height/2,100,50,'rgba(200, 200, 200, 0.5)');
    }
    if(runmode==1){
        drawrrect(-width/2+100,height/2,100,50,'rgba(255, 255, 255, 0.5)');
    }
    else if(runmodechosen==1){
        drawrrect(-width/2+100,height/2,100,50,'rgba(230, 230, 230, 0.5)');
    }
    else{
        drawrrect(-width/2+100,height/2,100,50,'rgba(200, 200, 200, 0.5)');
    }

    if(settingchosen!=-1){
        if(runmode==1||settingchosen<4){
            drawrrect(-width/2,-height/2+100+100*settingchosen,200,100,'rgba(255, 255, 255, 0.5)');
            drawrline(-width/2,-height/2+100+100*settingchosen,-width/2+200,-height/2+100+100*settingchosen,'rgba(64, 0, 255, 1)');
            drawrline(-width/2,-height/2+100*settingchosen,-width/2+200,-height/2+100*settingchosen,'rgba(64, 0, 255, 1)');
        }
    }

    blurRect(ctx,0,0,200,height,8);

    drawrline(-width/2+30,height/2-125,-width/2+170,height/2-125,2,'rgba(64, 0, 255, 1)');
    drawrdot(-width/2+clockslider,height/2-125, 7, 'rgba(48, 0, 180, 1)');


    ctx.font = '20px Arial';
    drawrtext('时序模式',-width/2+50,height/2-25,'rgb(0,0,0)');
    drawrtext('组合模式',-width/2+150,height/2-25,'rgb(0,0,0)');
    drawrtext('时钟周期:',-width/2+50,height/2-75,'rgb(0,0,0)');
    drawrtext((clockspeed*0.02).toFixed(2),-width/2+135,height/2-75,'rgb(0,0,0)');
    drawrtext('s',-width/2+175,height/2-75,'rgb(0,0,0)');
    ctx.font = '30px Arial';
    drawrtext('保存',-width/2+100,-height/2+250,'rgb(0,0,0)');
    drawrtext('导入',-width/2+100,-height/2+150,'rgb(0,0,0)');
    drawrtext('帮助',-width/2+100,-height/2+50,'rgb(0,0,0)');

    

    if(runmode==0){
        if(running){
            drawrtext('暂停',-width/2+70,-height/2+346,'rgba(64, 0, 255, 1)');
            drawrrect(-width/2+130,-height/2+363,26,26,'rgba(64, 0, 255, 1)');
            //drawrtext(rps,-width/2+70,-height/2+546,'rgba(64, 0, 255, 1)');
        }
        else{
            drawrtext('运行',-width/2+70,-height/2+346,'rgba(234, 101, 255, 1)');
            ctx.beginPath();
            ctx.moveTo(156,height-350);
            ctx.lineTo(130,height-365);
            ctx.lineTo(130,height-335);
            ctx.closePath();
            ctx.fillStyle = 'rgba(234, 101, 255, 1)';
            ctx.fill();
        }
    }
    else{
        ctx.font = '30px Arial';
        drawrtext('模拟',-width/2+70,-height/2+446,'rgba(234, 101, 255, 1)');
        ctx.beginPath();
        ctx.moveTo(156,height-450);
        ctx.lineTo(130,height-465);
        ctx.lineTo(130,height-435);
        ctx.closePath();
        ctx.fillStyle = 'rgba(234, 101, 255, 1)';
        ctx.fill();
        drawrtext('重置',-width/2+70,-height/2+346,'rgba(64, 0, 255, 1)');
        drawrrect(-width/2+130,-height/2+363,26,26,'rgba(64, 0, 255, 1)');
        ctx.font = '20px Arial';
        drawrtext('自动刷新：',-width/2+70,-height/2+550,'rgb(0, 0, 0)');
        if(run_when_change){
            drawrtext('已开启',-width/2+150,-height/2+550,'rgba(234, 101, 255, 1)');
        }
        else{
            drawrtext('已关闭',-width/2+150,-height/2+550,'rgba(64, 0, 255, 1)');
        }
        ctx.font = '30px Arial';
    }

}





function gridline(){
    const asb = crta(-width/2,-height/2);
    const asf = crta(width/2,height/2);
    const asbx = asb[0];
    const asby = asb[1];
    const asfx = asf[0];
    const asfy = asf[1];
    //console.log(asbx)
    //drawadot(asbx,asby,3,'rgb(0,0,0)')
    //drawaline(asbx+100,asby+100,asbx+100,asfy-100,5,'rgb(0,0,0)')
    if(mapscale>0.25){
        const nbx = Math.floor(asbx/50);
        const nby = Math.floor(asby/50);
        const nfx = Math.floor(asfx/50)+1;
        const nfy = Math.floor(asfy/50)+1;
        for(let i=0;i<nfx-nbx;i++){
            let color = 'rgb(200,200,200)';
            if((nbx+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nbx+i)%5==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(50*(nbx+i),asby,50*(nbx+i),asfy,1/mapscale,color);
        }
        for(let i=0;i<nfy-nby;i++){
            let color = 'rgb(200,200,200)';
            if((nby+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nby+i)%5==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(asbx,50*(nby+i),asfx,50*(nby+i),1/mapscale,color);
        }
    }
    else if(mapscale>0.0625){
        const nbx = Math.floor(asbx/250);
        const nby = Math.floor(asby/250);
        const nfx = Math.floor(asfx/250)+1;
        const nfy = Math.floor(asfy/250)+1;
        for(let i=0;i<nfx-nbx;i++){
            let color = 'rgb(200,200,200)';
            if((nbx+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nbx+i)%2==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(250*(nbx+i),asby,250*(nbx+i),asfy,1/mapscale,color);
        }
        for(let i=0;i<nfy-nby;i++){
            let color = 'rgb(200,200,200)';
            if((nby+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nby+i)%2==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(asbx,250*(nby+i),asfx,250*(nby+i),1/mapscale,color);
        }
    }
    else if(mapscale>0.015625){
        const nbx = Math.floor(asbx/500);
        const nby = Math.floor(asby/500);
        const nfx = Math.floor(asfx/500)+1;
        const nfy = Math.floor(asfy/500)+1;
        for(let i=0;i<nfx-nbx;i++){
            let color = 'rgb(200,200,200)';
            if((nbx+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nbx+i)%5==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(500*(nbx+i),asby,500*(nbx+i),asfy,1/mapscale,color);
        }
        for(let i=0;i<nfy-nby;i++){
            let color = 'rgb(200,200,200)';
            if((nby+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nby+i)%5==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(asbx,500*(nby+i),asfx,500*(nby+i),1/mapscale,color);
        }
    }
    else{
        const nbx = Math.floor(asbx/2500);
        const nby = Math.floor(asby/2500);
        const nfx = Math.floor(asfx/2500)+1;
        const nfy = Math.floor(asfy/2500)+1;
        for(let i=0;i<nfx-nbx;i++){
            let color = 'rgb(200,200,200)';
            if((nbx+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nbx+i)%2==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(2500*(nbx+i),asby,2500*(nbx+i),asfy,48+1/mapscale*0.25,color);
        }
        for(let i=0;i<nfy-nby;i++){
            let color = 'rgb(200,200,200)';
            if((nby+i)%10==0){
                color = 'rgb(0,0,0)';
            }
            else if((nby+i)%2==0){
                color = 'rgb(100,100,100)';
            }
            else{
                color = 'rgb(150,150,150)';
            }
            drawaline(asbx,2500*(nby+i),asfx,2500*(nby+i),48+1/mapscale*0.25,color);
        }
    }
}


//此函数由deepseek友情提供
// @ts-ignore
function blurRect(ctx, x, y, width, height, blurRadius = 5) {
    // 保存当前上下文状态
    ctx.save();
    
    // 创建离屏Canvas
    const offscreenCanvas = document.createElement('canvas');
    offscreenCanvas.width = width;
    offscreenCanvas.height = height;
    const offscreenCtx = offscreenCanvas.getContext('2d');
    
    // 1. 将指定区域的内容复制到离屏Canvas
    // @ts-ignore
    offscreenCtx.drawImage(
        ctx.canvas,
        x, y, width, height, // 源区域
        0, 0, width, height  // 目标区域
    );
    
    // 2. 应用模糊效果
    // @ts-ignore
    offscreenCtx.filter = `blur(${blurRadius}px)`;
    // @ts-ignore
    offscreenCtx.drawImage(offscreenCanvas, 0, 0);
    
    // 3. 将模糊后的内容绘制回原Canvas
    ctx.clearRect(x, y, width, height); // 清除原区域
    ctx.drawImage(offscreenCanvas, x, y);
    
    // 恢复上下文
    ctx.restore();
}



//@ts-ignore
function sidebarwheelconstrain(maxh=0,dwheel){
    if(maxh>height){
        sidebarwheel += 30*dwheel;
        if (sidebarwheel<height/2){
            sidebarwheel = height/2;
        }
        else if (sidebarwheel>-height/2+maxh){
            sidebarwheel = -height/2+maxh;
        }
    }
}



//@ts-ignore
function summon(op,ipart){
    if(op==0){
        if(ipart<=0){
            dpush('alwaystrue',amposx,amposy);
        }
        else if(ipart==1){
            dpush('alwaysfalse',amposx,amposy);
        }
        else if(ipart==2){
            dpush('switchbutton',amposx,amposy);
        }
        else if(ipart==3){
            dpush('upnode',amposx,amposy);
        }
        else if(ipart==4){
            dpush('downnode',amposx,amposy);
        }
        else if(ipart==5){
            dpush('outputbulb',amposx,amposy);
        }
        else if(ipart==6){
            dpush('clk',amposx,amposy);
        }
        else{
            dpush('Dflipflop',amposx,amposy);
        }
        drag = true;
        dragmode = 1;
        dragid = gatecount-1;
        unfoldsidebar = false;
    }
    else if(op==1){
        if(ipart==0){
            dpush('orgate',amposx,amposy);
        }
        else if(ipart==1){
            dpush('andgate',amposx,amposy);
        }
        else if(ipart==2){
            dpush('notgate',amposx,amposy);
        }
        else if(ipart==3){
            dpush('xorgate',amposx,amposy);
        }
        else if(ipart==4){
            dpush('triorgate',amposx,amposy);
        }
        else if(ipart==5){
            dpush('triandgate',amposx,amposy);
        }
        else if(ipart==6){
            dpush('norgate',amposx,amposy);
        }
        else if(ipart==7){
            dpush('nandgate',amposx,amposy);
        }
        else{
            dpush('outputbulb',amposx,amposy);
        }
        drag = true;
        dragmode = 1;
        dragid = gatecount-1;
        unfoldsidebar = false;
    }
    else if(op==2){
        if(ipart==0){
            dpush('Dflipflop',amposx,amposy);
            drag = true;
            dragmode = 1;
            dragid = gatecount-1;
            unfoldsidebar = false;
        }
        else if(ipart==1){
            dpush('JKflipflop',amposx,amposy);
            drag = true;
            dragmode = 1;
            dragid = gatecount-1;
            unfoldsidebar = false;
        }
        else if(ipart==2){
            dpush('Tflipflop',amposx,amposy);
            drag = true;
            dragmode = 1;
            dragid = gatecount-1;
            unfoldsidebar = false;
        }
        else if(ipart==3){
            dpush('petDflipflop',amposx,amposy);
            drag = true;
            dragmode = 1;
            dragid = gatecount-1;
            unfoldsidebar = false;
        }
        else if(ipart==4){
            dpush('counter',amposx,amposy);
            drag = true;
            dragmode = 1;
            dragid = gatecount-1;
            unfoldsidebar = false;
        }
        else{
            //dpush('outputbulb',amposx,amposy);
        }
        
    }
    else if(op==3){
        if(ipart==0){
            dpush('fulladder',amposx,amposy);
        }
        else if(ipart==1){
            dpush('complementer',amposx,amposy);
        }
        else if(ipart==2){
            dpush('encoder',amposx,amposy);
        }
        else if(ipart==3){
            dpush('pencoder',amposx,amposy);
        }
        else if(ipart==4){
            dpush('decoder',amposx,amposy);
        }
        else if(ipart==5){
            dpush('addressmux',amposx,amposy);
        }
        else if(ipart==6){
            dpush('dmx',amposx,amposy);
        }
        else if(ipart==7){
            dpush('leftshifter',amposx,amposy);
        }
        else if(ipart==8){
            dpush('rightshifter',amposx,amposy);
        }
        else{
            dpush('outputbulb',amposx,amposy);
        }
        drag = true;
        dragmode = 1;
        dragid = gatecount-1;
        unfoldsidebar = false;
    }
}


function credit(){
    drawrrect(-width/2+200,height/2,width-400,height,'rgba(240,240,240,0.8)');
    blurRect(ctx,0,0,width,height,3);
}




function returnmainloop(){
    showcredit = false;
    // @ts-ignore
    canvas.style.visibility = 'visible';
    // @ts-ignore
    credithtml.style.visibility = 'hidden';
    // @ts-ignore
    credithtml.innerHTML = '';
}



// @ts-ignore
function settingfunction(id){
    switch (id) {
        case 0:
            showcredit = true;
            // @ts-ignore
            canvas.style.visibility = 'hidden';
            // @ts-ignore
            credithtml.style.visibility = 'visible';
            // @ts-ignore
            credithtml.innerHTML = creditcontent;
            break;
        case 1: //save
            holdleft = false;
            //@ts-ignore
            fileInput.click();
            break;
        case 2: //upload
            const strgate = strify(gates)
            downloadFile(JSON.stringify(strgate), 'saves.txt');
            break;
        case 3: //run or reset
            if(runmode==0){
                console.log('1');
                running = !running
            }
            else{
                console.log('re');
                reset();
            }
            break;
        case 4:
            if(runmode==1){
                prerun(2);
            }
            break;
        case 5:
            if(runmode==1){
                run_when_change = !run_when_change
            }
            break;
        default:
            break;
    }
}













//controlling function



function singlerun(){
    console.log('run')
    runtimes += 1;
    for (const comp of Object.values(gates)){
        comp.init();  
    }
    for (const comp of Object.values(gates)){
        comp.lighten();
    }
}



// set=0
function reset(){
    console.log('set')
    for (const comp of Object.values(gates)){
        comp.reset();  
    }
}


// @ts-ignore
function prerun(runtype){
    //runtype  0:连接时运行,1:每帧运行,2:按钮运行
    //runmode  0:自动执行,1:连接时更新,2:手动运行，禁用连接时更新
    switch (runtype) {
        case 0:
            if(runmode==1&&run_when_change){
                singlerun();
            }
            break;
        case 1:
            if(runmode==0){
                if(running){
                    singlerun();
                }
            }
            break;
        case 2:
            if(runmode==1){
                singlerun();
            }
            break;
        case 3:
            singlerun();
            break;
        default:
            break;
    }
}

//controlling function



// @ts-ignore
function linearfunc(x){
    if(x<130){
        return 2*Math.floor((x-27)/3);
    }
    else if(x<170){
        return Math.floor(3.05*x-318);
    }
    else{
        return 200;
    }
}






// //




class pinin {
    // @ts-ignore
    constructor(superid,id,dx,dy){
        this.superid = superid;
        this.id = id;
        this.type = 'in';
        this.dx = dx;
        this.dy = dy;
        this.boxr = 5;
        this.touch = false;
        this.linetouch = false;
        this.linechosen = false;
        this.clicked = 0;
        this.chosen = false;
        this.connected = nonepin;
    }

    thisupdate(){
        // @ts-ignore
        this.sx = gates[this.superid].x
        // @ts-ignore
        this.sy = gates[this.superid].y
        this.x = this.sx + this.dx;
        this.y = this.sy + this.dy;

        this.touch = false;
        if(Math.abs(this.x-amposx)<this.boxr && Math.abs(this.y-amposy)<this.boxr){
            this.touch = true;
        }
        if(this.clicked>0){
            this.clicked = this.clicked-1
        }

        this.linetouch = false;
        if(this.connected!=nonepin){
            const psx = this.connected.x;
            const psy = this.connected.y;
            if((amposx-this.x)*(amposx-psx)<0||(amposy-this.y)*(amposy-psy)<0){
                const d = Math.abs((amposx-this.x)*(amposy-psy)-(amposx-psx)*(amposy-this.y))/
                ((this.x-psx)**2 + (this.y-psy)**2)**0.5;
                if(d<10){
                    this.linetouch = true;
                } 
            }
        }

        this.linechosen = false;
        if(this.connected!=nonepin){
            // @ts-ignore
            const sc = gates[this.superid];
            // @ts-ignore
            const nsc = gates[this.connected.superid];
            if(sc.chosen&&nsc.chosen){
                this.linechosen = true;
            }
        }
    }

    get cntio(){
        if(this.connected==nonepin){
            return -1;
        }
        else{
            // @ts-ignore
            const getinput = gates[this.connected.superid].cout[this.connected.id];
            return getinput;
            //return [this.connected.superid, this.connected.id];
        }   
    }

    draw(){
        // // @ts-ignore
        // const sx = gates[this.superid].x;
        // // @ts-ignore
        // const sy = gates[this.superid].y;
        let color1 = 'rgba(160, 30, 56, 1)';
        if(this.cntio==1){
            if(this.touch || this.chosen){color1='rgba(234, 101, 255, 1)'}
            else{color1='rgba(150, 0, 255, 0.5)'}
        }
        else if(this.cntio==0){
            if(this.touch || this.chosen){color1='rgba(64, 0, 255, 1)'}
            else{color1='rgba(25, 0, 101, 1)'}
        }
        else{
            if(this.touch || this.chosen){color1='rgba(255, 49, 70, 1)'}
            else{color1='rgba(160, 30, 56, 1)'} 
        }
        drawadot(this.sx+this.dx, this.sy+this.dy, 3, color1);
        
        // @ts-ignore
        let color2 = 'rgba(25, 0, 101, 1)';
        if(this.cntio==1){
            if(this.linetouch||this.linechosen){color2='rgba(234, 101, 255, 1)'}
            else{color2='rgba(150, 0, 255, 0.5)'} 
        }
        else if(this.cntio==0){
            if(this.linetouch||this.linechosen){color2='rgba(64, 0, 255, 1)'}
            else{color2='rgba(48, 0, 180, 0.5)'} 
        }
        else{
            if(this.linetouch||this.linechosen){color2='rgba(255, 49, 70, 1)'}
            else{color2='rgba(160, 30, 56, 1)'} 
        }
        drawaline(this.x,this.y,this.connected.x,this.connected.y,5,color2);
        
        
        
        
    }
}

class pinout {
    // @ts-ignore
    constructor(superid,id,dx,dy){
        this.superid = superid;
        this.id = id;
        this.type = 'out';
        this.dx = dx;
        this.dy = dy;
        this.cpout = -1;
        this.boxr = 5;
        this.touch = false;
        this.clicked = 0;
        this.chosen = false;
        this.connected = [];
    }

    thisupdate(){
        // @ts-ignore
        this.cpout = gates[this.superid].cout[this.id];
        // @ts-ignore
        this.sx = gates[this.superid].x
        // @ts-ignore
        this.sy = gates[this.superid].y
        this.x = this.sx + this.dx;
        this.y = this.sy + this.dy;

        this.touch = false;
        if(Math.abs(this.x-amposx)<this.boxr && Math.abs(this.y-amposy)<this.boxr){
            this.touch = true;
        }
        if(this.clicked>0){
            this.clicked = this.clicked-1
        }  
    }

    draw(){
        // @ts-ignore
        //const cout = gates[this.superid].cout[this.id];
        // if(this.touch || this.chosen){
        //     drawadot(this.sx+this.dx, this.sy+this.dy, 3, 'rgba(64, 0, 255, 1)');
        // }
        // else{
        //     drawadot(this.sx+this.dx, this.sy+this.dy, 3, 'rgba(25, 0, 101, 1)');
        // }
        let color = 'rgb(0,0,0)'
        if (this.cpout==1){
            if(this.touch||this.chosen){color='rgba(234, 101, 255, 1)'}
            else{color='rgba(150, 0, 255, 1)'}
        }
        else if(this.cpout==0){
            if(this.touch||this.chosen){color='rgba(64, 0, 255, 1)'}
            else{color='rgba(25, 0, 101, 1)'}
        }
        else{
            if(this.touch||this.chosen){color='rgba(255, 49, 70, 1)'}
            else{color='rgba(160, 30, 56, 1)'}
        }
        drawadot(this.sx+this.dx, this.sy+this.dy, 5, color);
        

     
    }
}

const nonepin = new pinout(-1,-1,0,0);



//gate class
class component {
    // @ts-ignore
    constructor(id,x,y){
        this.id = id;
        this.type = '';
        this.x = x;
        this.y = y;
        this.boxr = 20;
        this.set = 0;
        this.touch = false;
        this.chosen = false;
        this.nchosen = false;
        this.cox = x;
        this.coy = y;
        this.clicked = 0;
        /** @type {pinin[]}*/
        this.gpin = [];
        /** @type {pinout[]}*/
        this.gpout = [];
        this.init();
    }


    init(){
        this.state = 0;
        this.set = 0;
    }

    thisupdate(){
        this.touch = false;
        // @ts-ignore
        if(Math.abs(amposx-this.x)<(this.boxr) & Math.abs(amposy-this.y)<(this.boxr)){
            this.touch = true;
        }
        if(this.clicked>0){
            this.clicked = this.clicked-1
        }
        
    }

}




class andgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'andgate';
        this.output = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 0, 20));
        this.gpin.push(new pinin(this.id, 0, 10, -18));
        this.gpin.push(new pinin(this.id, 1, -10, -18));
    }

    get cout(){
        if(this.set==0){
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if (cin1!=-1&&cin2!=-1){
                if(cin1 && cin2){
                    this.output = 1;
                }
                else{
                    this.output = 0;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(andi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class triandgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'triandgate';
        this.boxr = 15;
        this.output = 0;
        this.gpout.push(new pinout(this.id, 0, 0, 20));
        this.gpin.push(new pinin(this.id, 0, -15, -18));
        this.gpin.push(new pinin(this.id, 1, 0, -18));
        this.gpin.push(new pinin(this.id, 2, 15, -18));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            const cin3 = this.gpin[2].cntio;
            
            if (cin1!=-1&&cin2!=-1&&cin3!=-1){
                if(cin1 && cin2 && cin3){
                    this.output = 1;
                }
                else{
                    this.output = 0;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(andi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class nandgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'nandgate';
        this.output = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 0, 23));
        this.gpin.push(new pinin(this.id, 0, 10, -18));
        this.gpin.push(new pinin(this.id, 1, -10, -18));
    }

    get cout(){
        if(this.set==0){
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if (cin1!=-1&&cin2!=-1){
                if(cin1 && cin2){
                    this.output = 0;
                }
                else{
                    this.output = 1;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(nandi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class orgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'orgate';
        this.output = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 0, 18));
        this.gpin.push(new pinin(this.id, 0, 10, -20));
        this.gpin.push(new pinin(this.id, 1, -10, -20));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if (cin1!=-1&&cin2!=-1){
                if(cin1 || cin2){
                    this.output = 1;
                }
                else{
                    this.output = 0;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(ori,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');  
    }
}



class triorgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'triorgate';
        this.output = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 0, 18));
        this.gpin.push(new pinin(this.id, 0, 15, -20));
        this.gpin.push(new pinin(this.id, 1, 0, -20));
        this.gpin.push(new pinin(this.id, 2, -15, -20));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            const cin3 = this.gpin[2].cntio;
            if (cin1!=-1&&cin2!=-1&&cin3!=-1){
                if(cin1 || cin2 || cin3){
                    this.output = 1;
                }
                else{
                    this.output = 0;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(ori,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)'); 
    }
}



class norgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'norgate';
        this.output = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 0, 21.5));
        this.gpin.push(new pinin(this.id, 0, 10, -20));
        this.gpin.push(new pinin(this.id, 1, -10, -20));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if (cin1!=-1&&cin2!=-1){
                if(cin1 || cin2){
                    this.output = 0;
                }
                else{
                    this.output = 1;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(nori,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');   
    }
}



class xorgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'xorgate';
        this.output = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 0, 20));
        this.gpin.push(new pinin(this.id, 0, 10, -20));
        this.gpin.push(new pinin(this.id, 1, -10, -20));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if (cin1!=-1&&cin2!=-1){
                if(cin1 ^ cin2){
                    this.output = 1;
                }
                else{
                    this.output = 0;
                }
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(xori,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
        
    }
}



class notgate extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'notgate';
        this.output = 0;
        this.boxr = 10;
        this.state = 0;
        this.gpout.push(new pinout(this.id, 0, 0, 19.5));
        this.gpin.push(new pinin(this.id, 0, 0, -13));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin = this.gpin[0].cntio;
            
            if(cin!=-1){
                this.output = 1-cin;
            }
            else{
                this.output = -1;
            }
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        if(this.cout[0]==1){
            this.state = 1;
        }
        else if(this.cout[0]==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(noti,this.x,this.y+7,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class alwaystrue extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'alwaystrue';
        this.output = -1;
        this.boxr = 8;
        this.gpout.push(new pinout(this.id, 0, 0, 15))
    }

    get cout(){
        if(this.set==0){
            this.set = 1;
            this.output = 1;
        }
        return [this.output]
    }
    reset(){
        this.output = -1;
        //this.init();
    }
    lighten(){}
    draw(){
        drawadot(this.x, this.y, 7, 'rgba(0, 0, 0, 1)');
        drawadot(this.x, this.y, 5, 'rgb(150,0,255)');
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class alwaysfalse extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.output = -1;
        this.type = 'alwaysfalse';
        this.boxr = 8;
        this.gpout.push(new pinout(this.id, 0, 0, 15));
    }

    get cout(){
        if(this.set==0){
            this.set = 1;
            this.output = 0;
        }
        return [this.output]
    }
    reset(){
        this.output = -1
        //this.init();
    }
    lighten(){}
    draw(){
        drawadot(this.x, this.y, 7, 'rgba(0, 0, 0, 1)');
        drawadot(this.x, this.y, 5, 'rgba(48, 0, 180, 1)');
        //drawacircle(this.x, this.y, 6, 2, 'rgba(0, 0, 0, 1)');
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}


class clk extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'clk';
        this.output = -1;
        this.boxr = 8;
        this.gpout.push(new pinout(this.id, 0, 0, 20));
    }

    get cout(){
        if(this.set==0){
            this.set = 1;
            if (clockperiod){
                this.output = 1;
            }
            else{
                this.output = 0;
            }
        }
        return [this.output];
        
    }
    reset(){
        this.output = -1;
        //this.init();
    }
    lighten(){}

    draw(){
        if (clockperiod){
            drawadot(this.x, this.y, 7, 'rgba(0, 0, 0, 1)');
            drawadot(this.x, this.y, 5, 'rgb(150,0,255)');
        }
        else{
            drawadot(this.x, this.y, 7, 'rgba(0, 0, 0, 1)');
            drawadot(this.x, this.y, 5, 'rgba(48, 0, 180, 1)');
        }
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}


//////

class Dflipflop extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'Dflipflop';
        this.output = 0;
        this.memory = 0;
        this.boxr = 25;
        this.gpout.push(new pinout(this.id, 0, 13, 28));
        this.gpout.push(new pinout(this.id, 1, -14, 28));
        this.gpin.push(new pinin(this.id, 0, -31, 0));
        this.gpin.push(new pinin(this.id, 1, 13, -28));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if(cin1==1&&cin2!=-1){
                this.memory = cin2;
            }
            this.output = this.memory; 
        }
        return [this.output,1-this.output];
    }

    reset(){
        this.output = -1
        this.memory = 0;
        //this.init();
    }

    lighten(){
        if(this.cout[0]==1){
            this.state = 1;
        }
        else{
            this.state = 0;
        }
    }

    draw(){
        drawapic(dffi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');   
    }
}



class JKflipflop extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'JKflipflop';
        this.output = 0;
        this.memory = 0;
        this.memp = 0;
        this.clkstate = 0;
        this.boxr = 25;
        this.gpout.push(new pinout(this.id, 0, 13, 28));
        this.gpout.push(new pinout(this.id, 1, -14, 28));
        this.gpin.push(new pinin(this.id, 0, -31, 0));
        this.gpin.push(new pinin(this.id, 1, 13, -28));
        this.gpin.push(new pinin(this.id, 2, -13, -28));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            const cin3 = this.gpin[2].cntio;
            if(cin1==1){
                this.clkstate = 1;
                
            }
            else{
                if(this.clkstate==1){
                    if(cin2==1&&cin3==0){this.memory=1}
                    else if(cin2==0&&cin3==1){this.memory=0}
                    else if(cin2==1&&cin3==1){this.memory=1-this.memory}
                    this.clkstate = 0;
                }
            }
            this.output = this.memory; 
        }
        return [this.output,1-this.output];
    }

    reset(){
        this.output = -1;
        this.memory = 0;
        //this.init();
    }

    lighten(){
        if(this.cout[0]==1){
            this.state = 1;
        }
        else{
            this.state = 0;
        }
    }

    draw(){
        drawapic(jki,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');   
    }
}


class Tflipflop extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'Tflipflop';
        this.output = 0;
        this.memory = 0;
        this.memp = 0;
        this.clkstate = 0;
        this.boxr = 25;
        this.gpout.push(new pinout(this.id, 0, 13, 28));
        this.gpout.push(new pinout(this.id, 1, -14, 28));
        this.gpin.push(new pinin(this.id, 0, -31, 0));
        this.gpin.push(new pinin(this.id, 1, 13, -28));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if(cin1==1){
                this.clkstate = 1;
                
            }
            else{
                if(this.clkstate==1){
                    if(cin2==1){this.memory=1-this.memory}
                    this.clkstate = 0;
                }
            }
            this.output = this.memory; 
        }
        return [this.output,1-this.output];
    }

    reset(){
        this.output = -1;
        this.memory =  0;
        //this.init();
    }

    lighten(){
        if(this.cout[0]==1){
            this.state = 1;
        }
        else{
            this.state = 0;
        }
    }

    draw(){
        drawapic(tffi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');   
    }
}


class petDflipflop extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'petDflipflop';
        this.output = 0;
        this.memory = 0;
        this.clkstate = 0;
        this.boxr = 25;
        this.gpout.push(new pinout(this.id, 0, 13, 28));
        this.gpout.push(new pinout(this.id, 1, -14, 28));
        this.gpin.push(new pinin(this.id, 0, -31, 0));
        this.gpin.push(new pinin(this.id, 1, 13, -28));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            if(cin1==1){
                if(this.clkstate==0){
                    if(cin2!=-1){this.memory=cin2}
                    this.clkstate = 1;
                }
            }
            else{
                this.clkstate = 0;
            }
            this.output = this.memory; 
        }
        return [this.output,1-this.output];
    }

    reset(){
        this.output = -1;
        this.memory = 0;
        //this.init();
    }

    lighten(){
        if(this.cout[0]==1){
            this.state = 1;
        }
        else{
            this.state = 0;
        }
    }

    draw(){
        drawapic(petdffi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');   
    }
}


class counter extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'counter';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.output3 = 0;
        this.output4 = 0;
        this.output5 = 0;
        this.output6 = 0;
        this.output7 = 0;
        this.memory = 0;
        this.gpout.push(new pinout(this.id, 0, -33, 25));
        this.gpout.push(new pinout(this.id, 1, -24, 25));
        this.gpout.push(new pinout(this.id, 2, -15, 25));
        this.gpout.push(new pinout(this.id, 3, -5, 25));
        this.gpout.push(new pinout(this.id, 4, 5, 25));
        this.gpout.push(new pinout(this.id, 5, 15, 25));
        this.gpout.push(new pinout(this.id, 6, 24, 25));
        this.gpout.push(new pinout(this.id, 7, 33, 25));
        this.gpin.push(new pinin(this.id, 0, 0, -23));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            if(cin0==1){
                this.clkstate = 1;  
            }
            else{
                if(this.clkstate==1){
                    this.memory += 1;
                    if(this.memory==256){
                        this.memory = 0;
                    }
                    
                    this.clkstate = 0;
                }
            }
            const nump = this.memory;
            this.output0 = Math.floor(nump/128)%2;
            this.output1 = Math.floor(nump/64)%2;
            this.output2 = Math.floor(nump/32)%2;
            this.output3 = Math.floor(nump/16)%2;
            this.output4 = Math.floor(nump/8)%2;
            this.output5 = Math.floor(nump/4)%2;
            this.output6 = Math.floor(nump/2)%2;
            this.output7 = nump%2;
            console.log(this.memory)
        }
        return [this.output0,this.output1,this.output2,this.output3,this.output4,this.output5,this.output6,this.output7];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        this.output3 = -1;
        this.output4 = -1;
        this.output5 = -1;
        this.output6 = -1;
        this.output7 = -1;
        this.memory = 0;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(counteri,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



///////

class switchbutton extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'switchbutton';
        this.output = 0;
        this.bstate = 0;
        this.boxr = 12;
        this.gpout.push(new pinout(this.id, 0, 0, 20));
    }

    get cout(){
        if(this.set==0){
            this.set = 1;
            if (this.bstate==0){
                this.output = 0;
            }
            else{
                this.output = 1;
            }
        }
        return [this.output]
        
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){}

    draw(){
        drawapic(bbi,this.x,this.y,0.05);
        if (this.bstate==0){
            //drawadot(this.x, this.y, 10, 'rgb(255,0,0)');
            drawadot(this.x, this.y, 5, 'rgba(48, 0, 180, 1)');
            drawacircle(this.x, this.y, 6, 2, 'rgba(0, 0, 0, 1)');
        }
        else{
            //drawadot(this.x, this.y, 10, 'rgb(0,255,0)');
            drawadot(this.x, this.y, 5, 'rgb(150,0,255)');
            drawacircle(this.x, this.y, 6, 2, 'rgba(0, 0, 0, 1)');
        }
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}


class outputbulb extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'outputbulb';
        this.state = -1;
        this.boxr = 9;
        this.gpin.push(new pinin(this.id, 0, 0, -15));
    }

    get cout(){
        return [0];
    }
    reset(){
        this.state = -1;
    }
    lighten(){
        const cin = this.gpin[0].cntio;
        if(cin==1){
            this.state = 1;
        }
        else if(cin==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        //drawadot(this.x, this.y, 10, 'rgba(0, 0, 0, 1)')
        if (this.state==0){
            drawaline(this.x+5.6,this.y+5.6,this.x-5.6,this.y-5.6,3,'rgba(48, 0, 180, 1)');
            drawaline(this.x+5.6,this.y-5.6,this.x-5.6,this.y+5.6,3,'rgba(48, 0, 180, 1)');
            drawacircle(this.x, this.y, 8.5, 2, 'rgba(0, 0, 0, 1)');
        }
        else if(this.state==1){
            drawaline(this.x+5.6,this.y+5.6,this.x-5.6,this.y-5.6,3,'rgb(150,0,255)');
            drawaline(this.x+5.6,this.y-5.6,this.x-5.6,this.y+5.6,3,'rgb(150,0,255)');
            drawacircle(this.x, this.y, 8.5, 2, 'rgba(0, 0, 0, 1)');
        }
        else{
            drawaline(this.x+5.6,this.y+5.6,this.x-5.6,this.y-5.6,3,'rgba(160, 30, 56, 1)');
            drawaline(this.x+5.6,this.y-5.6,this.x-5.6,this.y+5.6,3,'rgba(160, 30, 56, 1)');
            drawacircle(this.x, this.y, 8.5, 2, 'rgba(0, 0, 0, 1)');
        }
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class upnode extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'upnode';
        this.bstate = 0;
        this.boxr = 10;
        this.gpout.push(new pinout(this.id, 0, 0, 5));
        this.gpin.push(new pinin(this.id, 0, 0, -5));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            this.output = cin1;
        }
        return [this.output];
    }

    reset(){
        this.init();
    }
    
    lighten(){}

    draw(){}
}



class downnode extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'downnode';
        this.bstate = 0;
        this.boxr = 10;
        this.gpout.push(new pinout(this.id, 0, 0, -5));
        this.gpin.push(new pinin(this.id, 0, 0, 5));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            this.output = cin1;
        }
        return [this.output];
    }

    reset(){
        this.init();
    }

    lighten(){}

    draw(){}
}






class fulladder extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'fulladder';
        this.output0 = 0;
        this.output1 = 0;
        this.boxr = 15;
        this.gpout.push(new pinout(this.id, 0, 11, 20));
        this.gpout.push(new pinout(this.id, 1, -12, 20));
        this.gpin.push(new pinin(this.id, 0, 13, -18));
        this.gpin.push(new pinin(this.id, 1, -4, -18));
        this.gpin.push(new pinin(this.id, 2, -18, -18));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin1 = this.gpin[0].cntio;
            const cin2 = this.gpin[1].cntio;
            const cin3 = this.gpin[2].cntio;
            if (cin1!=-1&&cin2!=-1&&cin3!=-1){
                if(cin1+cin2+cin3>1){
                    this.output1 = 1;
                }
                else{
                    this.output1 = 0;
                }
                if(((cin1^cin2)^cin3)==1){
                    this.output0 = 1;
                }
                else{
                    this.output0 = 0;
                }
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
            }
        }
        return [this.output0,this.output1];
    }

    reset(){
        this.output1 = -1;
        this.output0 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(fai,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');  
    }
}


class complementer extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'complementer';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.output3 = 0;
        this.output4 = 0;
        this.output5 = 0;
        this.output6 = 0;
        this.output7 = 0;
        this.gpout.push(new pinout(this.id, 0, -33, 25));
        this.gpout.push(new pinout(this.id, 1, -24, 25));
        this.gpout.push(new pinout(this.id, 2, -15, 25));
        this.gpout.push(new pinout(this.id, 3, -5, 25));
        this.gpout.push(new pinout(this.id, 4, 5, 25));
        this.gpout.push(new pinout(this.id, 5, 15, 25));
        this.gpout.push(new pinout(this.id, 6, 24, 25));
        this.gpout.push(new pinout(this.id, 7, 33, 25));
        this.gpin.push(new pinin(this.id, 0, -33, -23));
        this.gpin.push(new pinin(this.id, 1, -24, -23));
        this.gpin.push(new pinin(this.id, 2, -15, -23));
        this.gpin.push(new pinin(this.id, 3, -5, -23));
        this.gpin.push(new pinin(this.id, 4, 5, -23));
        this.gpin.push(new pinin(this.id, 5, 15, -23));
        this.gpin.push(new pinin(this.id, 6, 24, -23));
        this.gpin.push(new pinin(this.id, 7, 33, -23));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            const cin3 = this.gpin[3].cntio;
            const cin4 = this.gpin[4].cntio;
            const cin5 = this.gpin[5].cntio;
            const cin6 = this.gpin[6].cntio;
            const cin7 = this.gpin[7].cntio;
            if (cin0!=-1&&cin1!=-1&&cin2!=-1&&cin3!=-1&&cin4!=-1&&cin5!=-1&&cin6!=-1&&cin7!=-1){
                if(cin0==1){
                    const anti1 = 1-cin1;
                    const anti2 = 1-cin2;
                    const anti3 = 1-cin3;
                    const anti4 = 1-cin4;
                    const anti5 = 1-cin5;
                    const anti6 = 1-cin6;
                    const anti7 = 1-cin7;
                    const num = anti1*64+anti2*32+anti3*16+anti4*8+anti5*4+anti6*2+anti7+1;
                    this.output1 = Math.floor(num/64)%2;
                    this.output2 = Math.floor(num/32)%2;
                    this.output3 = Math.floor(num/16)%2;
                    this.output4 = Math.floor(num/8)%2;
                    this.output5 = Math.floor(num/4)%2;
                    this.output6 = Math.floor(num/2)%2;
                    this.output7 = num%2;
                }
                else{
                    this.output1 = cin1;
                    this.output2 = cin2;
                    this.output3 = cin3;
                    this.output4 = cin4;
                    this.output5 = cin5;
                    this.output6 = cin6;
                    this.output7 = cin7;
                }
                this.output0 = cin0;
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
                this.output3 = -1;
                this.output4 = -1;
                this.output5 = -1;
                this.output6 = -1;
                this.output7 = -1;
            }
        }
        return [this.output0,this.output1,this.output2,this.output3,this.output4,this.output5,this.output6,this.output7];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        this.output3 = -1;
        this.output4 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(complementeri,this.x,this.y,0.1);
        //drawadot(this.x, this.y, this.boxr, 'rgba(255, 0, 0, 1)');
    }
}



class encoder extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'encoder';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.gpout.push(new pinout(this.id, 0, -15, 25));
        this.gpout.push(new pinout(this.id, 1, 0, 25));
        this.gpout.push(new pinout(this.id, 2, 15, 25));
        this.gpin.push(new pinin(this.id, 0, -33, -23));
        this.gpin.push(new pinin(this.id, 1, -24, -23));
        this.gpin.push(new pinin(this.id, 2, -15, -23));
        this.gpin.push(new pinin(this.id, 3, -5, -23));
        this.gpin.push(new pinin(this.id, 4, 5, -23));
        this.gpin.push(new pinin(this.id, 5, 15, -23));
        this.gpin.push(new pinin(this.id, 6, 24, -23));
        this.gpin.push(new pinin(this.id, 7, 33, -23));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            const cin3 = this.gpin[3].cntio;
            const cin4 = this.gpin[4].cntio;
            const cin5 = this.gpin[5].cntio;
            const cin6 = this.gpin[6].cntio;
            const cin7 = this.gpin[7].cntio;
            if (cin0!=-1&&cin1!=-1&&cin2!=-1&&cin3!=-1&&cin4!=-1&&cin5!=-1&&cin6!=-1&&cin7!=-1){
                if(cin0==1||cin1==1||cin2==1||cin3==1){
                    this.output0 = 1;
                }
                else{this.output0 = 0}
                if(cin0==1||cin1==1||cin4==1||cin5==1){
                    this.output1 = 1;
                }
                else{this.output1 = 0}
                if(cin0==1||cin2==1||cin4==1||cin6==1){
                    this.output2 = 1;
                }
                else{this.output2 = 0}
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
            }
        }
        return [this.output0,this.output1,this.output2];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(encoderi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}



class pencoder extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'pencoder';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.gpout.push(new pinout(this.id, 0, -15, 25));
        this.gpout.push(new pinout(this.id, 1, 0, 25));
        this.gpout.push(new pinout(this.id, 2, 15, 25));
        this.gpin.push(new pinin(this.id, 0, -33, -23));
        this.gpin.push(new pinin(this.id, 1, -24, -23));
        this.gpin.push(new pinin(this.id, 2, -15, -23));
        this.gpin.push(new pinin(this.id, 3, -5, -23));
        this.gpin.push(new pinin(this.id, 4, 5, -23));
        this.gpin.push(new pinin(this.id, 5, 15, -23));
        this.gpin.push(new pinin(this.id, 6, 24, -23));
        this.gpin.push(new pinin(this.id, 7, 33, -23));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            const cin3 = this.gpin[3].cntio;
            const cin4 = this.gpin[4].cntio;
            const cin5 = this.gpin[5].cntio;
            const cin6 = this.gpin[6].cntio;
            const cin7 = this.gpin[7].cntio;
            if (cin0!=-1&&cin1!=-1&&cin2!=-1&&cin3!=-1&&cin4!=-1&&cin5!=-1&&cin6!=-1&&cin7!=-1){
                if(cin0==1){this.output0=1;this.output1=1;this.output2=1;}
                else if(cin1==1){this.output0=1;this.output1=1;this.output2=0;}
                else if(cin2==1){this.output0=1;this.output1=0;this.output2=1;}
                else if(cin3==1){this.output0=1;this.output1=0;this.output2=0;}
                else if(cin4==1){this.output0=0;this.output1=1;this.output2=1;}
                else if(cin5==1){this.output0=0;this.output1=1;this.output2=0;}
                else if(cin6==1){this.output0=0;this.output1=0;this.output2=1;}
                else if(cin7==1){this.output0=0;this.output1=0;this.output2=0;}
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
            }
        }
        return [this.output0,this.output1,this.output2];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(encoderi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}


class decoder extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'decoder';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.output3 = 0;
        this.output4 = 0;
        this.output5 = 0;
        this.output6 = 0;
        this.output7 = 0;
        this.gpout.push(new pinout(this.id, 0, -33, 25));
        this.gpout.push(new pinout(this.id, 1, -24, 25));
        this.gpout.push(new pinout(this.id, 2, -15, 25));
        this.gpout.push(new pinout(this.id, 3, -5, 25));
        this.gpout.push(new pinout(this.id, 4, 5, 25));
        this.gpout.push(new pinout(this.id, 5, 15, 25));
        this.gpout.push(new pinout(this.id, 6, 24, 25));
        this.gpout.push(new pinout(this.id, 7, 33, 25));
        this.gpin.push(new pinin(this.id, 0, -10, -23));
        this.gpin.push(new pinin(this.id, 1, 0, -23));
        this.gpin.push(new pinin(this.id, 2, 10, -23));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            if (cin0!=-1&&cin1!=-1&&cin2!=-1){
                this.output0=0;this.output1=0;this.output2=0;this.output3=0;
                this.output4=0;this.output5=0;this.output6=0;this.output7=0;
                const adrnum = cin0*4+cin1*2+cin2;
                if(adrnum==7){this.output0 = 1}
                else if(adrnum==6){this.output1 = 1}
                else if(adrnum==5){this.output2 = 1}
                else if(adrnum==4){this.output3 = 1}
                else if(adrnum==3){this.output4 = 1}
                else if(adrnum==2){this.output5 = 1}
                else if(adrnum==1){this.output6 = 1}
                else if(adrnum==0){this.output7 = 1}
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
                this.output3 = -1;
                this.output4 = -1;
                this.output5 = -1;
                this.output6 = -1;
                this.output7 = -1;
            }
        }
        return [this.output0,this.output1,this.output2,this.output3,this.output4,this.output5,this.output6,this.output7];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        this.output3 = -1;
        this.output4 = -1;
        this.output5 = -1;
        this.output6 = -1;
        this.output7 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(decoderi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}


class addressmux extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'addressmux';
        this.output = 0;
        this.gpout.push(new pinout(this.id, 0, 0, 25));
        this.gpin.push(new pinin(this.id, 0, -33, -23));
        this.gpin.push(new pinin(this.id, 1, -24, -23));
        this.gpin.push(new pinin(this.id, 2, -15, -23));
        this.gpin.push(new pinin(this.id, 3, -5, -23));
        this.gpin.push(new pinin(this.id, 4, 5, -23));
        this.gpin.push(new pinin(this.id, 5, 15, -23));
        this.gpin.push(new pinin(this.id, 6, 24, -23));
        this.gpin.push(new pinin(this.id, 7, 33, -23));
        this.gpin.push(new pinin(this.id, 8, -43, 9));
        this.gpin.push(new pinin(this.id, 9, -43, 2));
        this.gpin.push(new pinin(this.id, 10, -43, -5));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            const cin3 = this.gpin[3].cntio;
            const cin4 = this.gpin[4].cntio;
            const cin5 = this.gpin[5].cntio;
            const cin6 = this.gpin[6].cntio;
            const cin7 = this.gpin[7].cntio;
            const as0 = this.gpin[8].cntio;
            const as1 = this.gpin[9].cntio;
            const as2 = this.gpin[10].cntio;
            if (as0!=-1&&as1!=-1&&as2!=-1){
                const adrnum = as0*4+as1*2+as2;
                if(adrnum==7){this.output = cin0}
                else if(adrnum==6){this.output = cin1}
                else if(adrnum==5){this.output = cin2}
                else if(adrnum==4){this.output = cin3}
                else if(adrnum==3){this.output = cin4}
                else if(adrnum==2){this.output = cin5}
                else if(adrnum==1){this.output = cin6}
                else if(adrnum==0){this.output = cin7}
            }
            else{
                this.output = -1;
            }
            
        }
        return [this.output];
    }

    reset(){
        this.output = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(addrmuxi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}



class dmx extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'dmx';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.output3 = 0;
        this.output4 = 0;
        this.output5 = 0;
        this.output6 = 0;
        this.output7 = 0;
        this.gpout.push(new pinout(this.id, 0, -33, 25));
        this.gpout.push(new pinout(this.id, 1, -24, 25));
        this.gpout.push(new pinout(this.id, 2, -15, 25));
        this.gpout.push(new pinout(this.id, 3, -5, 25));
        this.gpout.push(new pinout(this.id, 4, 5, 25));
        this.gpout.push(new pinout(this.id, 5, 15, 25));
        this.gpout.push(new pinout(this.id, 6, 24, 25));
        this.gpout.push(new pinout(this.id, 7, 33, 25));
        this.gpin.push(new pinin(this.id, 0, -43, 2));
        this.gpin.push(new pinin(this.id, 1, -43, -5));
        this.gpin.push(new pinin(this.id, 2, -43, -12));
        this.gpin.push(new pinin(this.id, 3, 0, -23))
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[3].cntio;
            const as0 = this.gpin[0].cntio;
            const as1 = this.gpin[1].cntio;
            const as2 = this.gpin[2].cntio;
            if (cin0!=-1&&as0!=-1&&as1!=-1&&as2!=-1){
                this.output0=0;this.output1=0;this.output2=0;this.output3=0;
                this.output4=0;this.output5=0;this.output6=0;this.output7=0;
                const adrnum = as0*4+as1*2+as2;
                if(adrnum==7){this.output0 = cin0}
                else if(adrnum==6){this.output1 = cin0}
                else if(adrnum==5){this.output2 = cin0}
                else if(adrnum==4){this.output3 = cin0}
                else if(adrnum==3){this.output4 = cin0}
                else if(adrnum==2){this.output5 = cin0}
                else if(adrnum==1){this.output6 = cin0}
                else if(adrnum==0){this.output7 = cin0}
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
                this.output3 = -1;
                this.output4 = -1;
                this.output5 = -1;
                this.output6 = -1;
                this.output7 = -1;
            }
            
        }
        return [this.output0,this.output1,this.output2,this.output3,this.output4,this.output5,this.output6,this.output7];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        this.output3 = -1;
        this.output4 = -1;
        this.output5 = -1;
        this.output6 = -1;
        this.output7 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(dmxi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}



class leftshifter extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'leftshifter';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.output3 = 0;
        this.output4 = 0;
        this.output5 = 0;
        this.output6 = 0;
        this.output7 = 0;
        this.gpout.push(new pinout(this.id, 0, -33, 25));
        this.gpout.push(new pinout(this.id, 1, -24, 25));
        this.gpout.push(new pinout(this.id, 2, -15, 25));
        this.gpout.push(new pinout(this.id, 3, -5, 25));
        this.gpout.push(new pinout(this.id, 4, 5, 25));
        this.gpout.push(new pinout(this.id, 5, 15, 25));
        this.gpout.push(new pinout(this.id, 6, 24, 25));
        this.gpout.push(new pinout(this.id, 7, 33, 25));
        this.gpin.push(new pinin(this.id, 0, -33, -23));
        this.gpin.push(new pinin(this.id, 1, -24, -23));
        this.gpin.push(new pinin(this.id, 2, -15, -23));
        this.gpin.push(new pinin(this.id, 3, -5, -23));
        this.gpin.push(new pinin(this.id, 4, 5, -23));
        this.gpin.push(new pinin(this.id, 5, 15, -23));
        this.gpin.push(new pinin(this.id, 6, 24, -23));
        this.gpin.push(new pinin(this.id, 7, 33, -23));
        this.gpin.push(new pinin(this.id, 8, -43, 8));
        this.gpin.push(new pinin(this.id, 9, -43, 0));
        this.gpin.push(new pinin(this.id, 10, -43, -8));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            const cin3 = this.gpin[3].cntio;
            const cin4 = this.gpin[4].cntio;
            const cin5 = this.gpin[5].cntio;
            const cin6 = this.gpin[6].cntio;
            const cin7 = this.gpin[7].cntio;
            const as0 = this.gpin[8].cntio;
            const as1 = this.gpin[9].cntio;
            const as2 = this.gpin[10].cntio;
            if (cin0!=-1&&cin1!=-1&&cin2!=-1&&cin3!=-1&&cin4!=-1&&cin5!=-1&&cin6!=-1&&cin7!=-1&&as0!=-1&&as1!=-1&&as2!=-1){
                this.output0=0;this.output1=0;this.output2=0;this.output3=0;
                this.output4=0;this.output5=0;this.output6=0;this.output7=0;
                const adrnum = as0*4+as1*2+as2;
                const num = cin0*128+cin1*64+cin2*32+cin3*16+cin4*8+cin5*4+cin6*2+cin7;
                const nump = num*2**adrnum;
                this.output0 = Math.floor(nump/128)%2;
                this.output1 = Math.floor(nump/64)%2;
                this.output2 = Math.floor(nump/32)%2;
                this.output3 = Math.floor(nump/16)%2;
                this.output4 = Math.floor(nump/8)%2;
                this.output5 = Math.floor(nump/4)%2;
                this.output6 = Math.floor(nump/2)%2;
                this.output7 = nump%2;
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
                this.output3 = -1;
                this.output4 = -1;
                this.output5 = -1;
                this.output6 = -1;
                this.output7 = -1;
            }
            
        }
        return [this.output0,this.output1,this.output2,this.output3,this.output4,this.output5,this.output6,this.output7];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        this.output3 = -1;
        this.output4 = -1;
        this.output5 = -1;
        this.output6 = -1;
        this.output7 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(lshi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}

class rightshifter extends component{
    // @ts-ignore
    constructor(id,x,y){
        super(id,x,y);
        this.type = 'rightshifter';
        this.output0 = 0;
        this.output1 = 0;
        this.output2 = 0;
        this.output3 = 0;
        this.output4 = 0;
        this.output5 = 0;
        this.output6 = 0;
        this.output7 = 0;
        this.gpout.push(new pinout(this.id, 0, -33, 25));
        this.gpout.push(new pinout(this.id, 1, -24, 25));
        this.gpout.push(new pinout(this.id, 2, -15, 25));
        this.gpout.push(new pinout(this.id, 3, -5, 25));
        this.gpout.push(new pinout(this.id, 4, 5, 25));
        this.gpout.push(new pinout(this.id, 5, 15, 25));
        this.gpout.push(new pinout(this.id, 6, 24, 25));
        this.gpout.push(new pinout(this.id, 7, 33, 25));
        this.gpin.push(new pinin(this.id, 0, -33, -23));
        this.gpin.push(new pinin(this.id, 1, -24, -23));
        this.gpin.push(new pinin(this.id, 2, -15, -23));
        this.gpin.push(new pinin(this.id, 3, -5, -23));
        this.gpin.push(new pinin(this.id, 4, 5, -23));
        this.gpin.push(new pinin(this.id, 5, 15, -23));
        this.gpin.push(new pinin(this.id, 6, 24, -23));
        this.gpin.push(new pinin(this.id, 7, 33, -23));
        this.gpin.push(new pinin(this.id, 8, -43, 8));
        this.gpin.push(new pinin(this.id, 9, -43, 0));
        this.gpin.push(new pinin(this.id, 10, -43, -8));
    }

    get cout(){
        if(this.set==0){  
            this.set = 1;
            const cin0 = this.gpin[0].cntio;
            const cin1 = this.gpin[1].cntio;
            const cin2 = this.gpin[2].cntio;
            const cin3 = this.gpin[3].cntio;
            const cin4 = this.gpin[4].cntio;
            const cin5 = this.gpin[5].cntio;
            const cin6 = this.gpin[6].cntio;
            const cin7 = this.gpin[7].cntio;
            const as0 = this.gpin[8].cntio;
            const as1 = this.gpin[9].cntio;
            const as2 = this.gpin[10].cntio;
            if (cin0!=-1&&cin1!=-1&&cin2!=-1&&cin3!=-1&&cin4!=-1&&cin5!=-1&&cin6!=-1&&cin7!=-1&&as0!=-1&&as1!=-1&&as2!=-1){
                this.output0=0;this.output1=0;this.output2=0;this.output3=0;
                this.output4=0;this.output5=0;this.output6=0;this.output7=0;
                const adrnum = as0*4+as1*2+as2;
                const num = cin0*128+cin1*64+cin2*32+cin3*16+cin4*8+cin5*4+cin6*2+cin7;
                const nump = Math.floor(num/(2**adrnum));
                this.output0 = Math.floor(nump/128)%2;
                this.output1 = Math.floor(nump/64)%2;
                this.output2 = Math.floor(nump/32)%2;
                this.output3 = Math.floor(nump/16)%2;
                this.output4 = Math.floor(nump/8)%2;
                this.output5 = Math.floor(nump/4)%2;
                this.output6 = Math.floor(nump/2)%2;
                this.output7 = nump%2;
            }
            else{
                this.output0 = -1;
                this.output1 = -1;
                this.output2 = -1;
                this.output3 = -1;
                this.output4 = -1;
                this.output5 = -1;
                this.output6 = -1;
                this.output7 = -1;
            }
            
        }
        return [this.output0,this.output1,this.output2,this.output3,this.output4,this.output5,this.output6,this.output7];
    }

    reset(){
        this.output0 = -1;
        this.output1 = -1;
        this.output2 = -1;
        this.output3 = -1;
        this.output4 = -1;
        this.output5 = -1;
        this.output6 = -1;
        this.output7 = -1;
        //this.init();
    }

    lighten(){
        const thisout = this.cout[0];
        if(thisout==1){
            this.state = 1;
        }
        else if(thisout==0){
            this.state = 0;
        }
        else{
            this.state = -1;
        }
    }

    draw(){
        drawapic(rshi,this.x,this.y,0.1);
        //drawadot(this.x, this.y, 1, 'rgba(255, 0, 0, 1)');  
    }
}






function render(){
    //clear
    // @ts-ignore
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(221, 133, 0, 1)'

    gridline();
    
    //draw comp and pin
    for (const comp of Object.values(gates)){
        comp.draw();
    }
    for (const comp of Object.values(gates)){
        for (const pin of comp.gpin){
            pin.draw();
        }
        for (const pin of comp.gpout){
            pin.draw();
        }
    }

    //draw wire
    if(tline){
        let bpin = 0;
        let color = 'rgba(255, 49, 70, 1)';
        if(dragpin[2]==0){
            // @ts-ignore
            bpin = gates[dragpin[0]].gpin[dragpin[1]];
            color = 'rgba(255, 49, 70, 1)';
        }
        else{
            // @ts-ignore
            bpin = gates[dragpin[0]].gpout[dragpin[1]];
            // @ts-ignore
            if(bpin.cpout==1){color='rgba(234, 101, 255, 1)'}
            // @ts-ignore
            else if(bpin.cpout==0){color='rgba(64, 0, 255, 1)'}
            else{color='rgba(255, 49, 70, 1)'}

        }
        // @ts-ignore
        drawaline(bpin.x,bpin.y,amposx,amposy,5,color)
    }
 
    //chosen
    if(rightdrag){
        drawaline(drsx,drsy,drsx,amposy,2/mapscale,'rgba(0, 213, 255, 1)');
        drawaline(drsx,drsy,amposx,drsy,2/mapscale,'rgba(0, 213, 255, 1)');
        drawaline(drsx,amposy,amposx,amposy,2/mapscale,'rgba(0, 213, 255, 1)');
        drawaline(amposx,drsy,amposx,amposy,2/mapscale,'rgba(0, 213, 255, 1)');
    }
    if(chosen){
        drawaline(cbx,cby,cbx,cfy,5/mapscale,'rgba(0, 213, 255, 1)');
        drawaline(cbx,cby,cfx,cby,5/mapscale,'rgba(0, 213, 255, 1)');
        drawaline(cbx,cfy,cfx,cfy,5/mapscale,'rgba(0, 213, 255, 1)');
        drawaline(cfx,cby,cfx,cfy,5/mapscale,'rgba(0, 213, 255, 1)');
    }

    

    //侧边栏
    
    // drawrtext(runmode,-width/2+300,height/2-200,'rgb(0,0,0)');
    // drawrtext(running,-width/2+300,height/2-300,'rgb(0,0,0)');
    // drawrtext(run_when_change,-width/2+300,height/2-400,'rgb(0,0,0)');
    // drawrtext(clockslidertouch,-width/2+300,height/2-500,'rgb(0,0,0)');
    // drawrtext(clockslider,-width/2+300,height/2-600,'rgb(0,0,0)');

    drawrdot(-width,-height,1,'rgb(20,165,200)')
    rendersidebar();
    leftsidebar();
    drawrdot(-width,-height,1,'rgb(20,165,200)')
    // smlb.draw();
    // uploadb.draw();
    // dlb.draw();
    // presetb.draw();
    
    if(showcredit){
        credit();
    }

    //mouse
    if(holdleft){
        drawrdot(mposx,mposy,5,'rgba(242, 0, 255, 0.5)');
    }
    else{
        drawrdot(mposx,mposy,5,'rgba(92, 37, 255, 0.5)');
    }     
}







function update(){
    

    const dwheel = wheel - lwheel;
    lwheel = wheel;

    if(!showcredit){



    if(timeclk<clockspeed/2){
        if(clockperiod){
            prerun(0);
        }
        clockperiod = false;
    }
    else{
        if(!clockperiod){
            prerun(0);
        }
        clockperiod = true;
    }
 
    prerun(1);
    

    // smlb.thisupdate();
    // uploadb.thisupdate();
    // dlb.thisupdate();
    // presetb.thisupdate();


    for(const comp of Object.values(gates)){
        comp.thisupdate();
        for (const pin of comp.gpin){
            pin.thisupdate();
        }
        for (const pin of comp.gpout){
            pin.thisupdate();
        }
    }

    
    if(presetclicked>0){
        presetclicked += -1;
    }


    clockslidertouch = false;
    //鼠标位于右侧边栏
    if(mposx>rightsidex && !drag){
        unfoldsidebar = true;
        drag = false;
        rightdrag = false;
        settingchosen = -1
        
        if(optionmode==0){
            sidebarwheelconstrain(910,dwheel);
        }
        else if(optionmode==1){
            sidebarwheelconstrain(1040,dwheel);
        }
        else if(optionmode==2){
            sidebarwheelconstrain(0,dwheel);
        }
        else if(optionmode==3){
            sidebarwheelconstrain(1170,dwheel);
        }
        else if(optionmode==4){
            sidebarwheelconstrain(0,dwheel);
            ipart = Math.floor((sidebarwheel-30-mposy)/50);
            if(ipart<=0){
                ipart = 0;
            }
        }

        //选项栏
        if(mposx>rightsidex+100 && !drag){
            if(mposy>0.3*height){opchosen = 0;}
            else if(mposy>0.1*height){opchosen = 1;}
            else if(mposy>-0.1*height){opchosen = 2;}
            else if(mposy>-0.3*height){opchosen = 3;}
            else if(mposy>-0.1*height){opchosen = 4;}
            else{opchosen = 4;}
            if(holdleft){
                optionmode = opchosen;
                sidebarwheel = height/2;
            }
        }
        //元件池
        else{
            opchosen = -1;
            if(optionmode==4){
                //ipart = Math.floor((sidebarwheel-30-mposy)/50);
                if(holdleft){
                    if(presetclicked==0){
                        console.log(ipart);
                        choosepreset(ipart);
                        presetclicked = 20;
                    }
                }
            }
            else{
                ipart = Math.floor((sidebarwheel-mposy)/130);
                if(holdleft){
                    summon(optionmode,ipart);
                }
            }
        }
        


    }

    //鼠标位于左侧边栏
    else if(mposx<-width/2+200 && !drag){
        drag = false;
        rightdrag = false;
        ipart = -1;

        //选项栏
        if(mposy>height/2-50){
            if(mposx>-width/2+100){runmodechosen=1;}
            else{runmodechosen=0;}
            if(holdleft){
                runmode = runmodechosen;
                running = false;
            }
        }
        //元件池
        else{
            runmodechosen = -1;

            
            if(mposy<100-height/2){settingchosen=0}
            else if(mposy<200-height/2){settingchosen=1}
            else if(mposy<300-height/2){settingchosen=2}
            else if(mposy<400-height/2){settingchosen=3}
            else if(mposy<500-height/2){settingchosen=4}
            else if(mposy<600-height/2){settingchosen=5}
            else{
                settingchosen = -1;
                if(ininterval(mposy,height/2-50,-height/2+600)){
                    if(Math.abs(mposx-clockslider+width/2)<20){
                        clockslidertouch = true;
                    }
                }
            }

            if(holdleft){
                if(settingchosen==-1){
                    if(clockslidertouch&&holdleft){
                        clockslider = mposx+width/2
                        if(clockslider>170){
                            clockslider=170;
                        }
                        if(clockslider<30){
                            clockslider=30;
                        }
                        clockspeed = linearfunc(clockslider);
                        timeclk = 0;
                    }
                }
                else{
                    if(runmode==1||settingchosen<4){
                        if(presetclicked==0){
                            settingfunction(settingchosen);
                            presetclicked = 20;
                        }
                    }
                }
            }
            
 
            
        }
    }

    //鼠标在画布中
    else{
        opchosen = -1;
        ipart = -1;
        settingchosen = -1;
        unfoldsidebar = false;
        mapscale = mapscale*2**(-dwheel/15);
        if(mapscale>16){
            mapscale = 16;
        }
        else if(mapscale<0.001953126){
            mapscale = 0.001953125
        }
        ////////////按下左键
        if(holdleft){
            holdframe += 1;
            //持续处理左键拖动
            if(drag){
                //三种左键拖动类型
                switch(dragmode){
                    case 0:
                        mapx = msx+(dsx-mposx)/mapscale;
                        mapy = msy+(dsy-mposy)/mapscale;
                        break;
                    case 1:
                        // @ts-ignore
                        gates[dragid].x = crta(mposx,mposy)[0];
                        // @ts-ignore
                        gates[dragid].y = crta(mposx,mposy)[1];
                        break;
                    case 2:
                        tline = true;
                        break;
                    case 3:
                        cbx = amposx + cbdx;
                        cby = amposy + cbdy;
                        cfx = amposx + cfdx;
                        cfy = amposy + cfdy;
                        for(const comp of Object.values(gates)){
                            if(comp.chosen){
                                comp.x = amposx + comp.cdx;
                                comp.y = amposy + comp.cdy;
                            }
                        }
                        break;
                } 
            }
            else if(chosen){
                //点击选择框外，取消选择
                if(!ininterval(amposx,cbx,cfx)||!ininterval(amposy,cby,cfy)){
                    chosen = false;
                    for (const comp of Object.values(gates)){
                        comp.chosen = false;
                    }
                }
                //点击框内，处理
                else{
                    drag = true;
                    dragmode = 3;
                    dsx = amposx;
                    dsy = amposy;
                    cbdx = cbx-amposx;
                    cbdy = cby-amposy;
                    cfdx = cfx-amposx;
                    cfdy = cfy-amposy;
                    for(const comp of Object.values(gates)){
                        if(comp.chosen){
                            comp.cdx=comp.x-amposx;
                            comp.cdy=comp.y-amposy;
                        }
                    }
                }
            }
            //按钮点击
            else{
                let cdt = true;
                pinloop:
                //导线拖动
                // @ts-ignore
                for(const comp of Object.values(gates)){
                    for(const pin of comp.gpin){
                        if(pin.touch){
                            cdt = false;
                            drag = true;
                            dragmode = 2;
                            dragpin = [comp.id,pin.id,0]
                            const cpout = pin.connected
                            if(cpout!=nonepin){
                                const index = cpout.connected.indexOf([pin.spuerid,pin.id]);
                                // @ts-ignore
                                gates[cpout.superid].gpout[cpout.id].connected.splice(index,1);
                            }
                            pin.connected = nonepin;
                            pin.chosen = true;
                            break pinloop;
                        }
                    }
                    for(const pin of comp.gpout){
                        if(pin.touch){
                            cdt = false;
                            drag = true;
                            dragmode = 2;
                            dragpin = [comp.id,pin.id,1]
                            pin.chosen = true;
                            break pinloop;
                        }
                    }
                }
                if(cdt){
                    //元件拖动
                    // @ts-ignore
                    for (const comp of Object.values(gates)){
                        if(comp.touch){
                            cdt = false;
                            drag = true;
                            dragmode = 1;
                            dragid = comp.id;  
                            break; 
                            
                        } 
                    }
                    //地图拖动
                    if(cdt){
                        drag = true;
                        dragmode = 0;
                        dsx = mposx, dsy = mposy;
                        msx = mapx, msy = mapy;
                    }
                }
                
            }
            
        }
        /////////按下右键
        else if(holdright){
            rholdframe += 1;
            //持续处理右键拖动
            if(rightdrag){
                for(const comp of Object.values(gates)){
                    if(ininterval(comp.x, drsx, amposx)&&ininterval(comp.y, drsy, amposy)){
                        comp.chosen = true;
                    }
                    else{
                        comp.chosen = false;
                    }
                }
            }
            //选择时按下右键 copy
            else if(chosen){
                if(ininterval(amposx,cbx,cfx)&&ininterval(amposy,cby,cfy)){
                    if(rholdframe==1){
                        rused = true;
                        //
                        cbx += 50;
                        cby -= 50;
                        cfx += 50;
                        cfy -= 50;
                        let mapdict  = {};
                        // @ts-ignore
                        // @ts-ignore
                        // @ts-ignore
                        let n = gatecount;
                        console.log('\nbg');

                        // @ts-ignore
                        // @ts-ignore
                        // @ts-ignore
                        const okey = Object.keys(gates);
                        for(const i of Object.keys(gates)){
                            // @ts-ignore
                            const comp = gates[i];
                            if(comp.chosen){
                                // @ts-ignore
                                mapdict[comp.id] = gatecount;
                                dpush(comp.type, comp.x+50, comp.y-50);
                                // @ts-ignore
                                gates[gatecount-1].nchosen = true;
                            }
                        }


                        const oldid = Object.keys(mapdict);
                        // @ts-ignore
                        // @ts-ignore
                        // @ts-ignore
                        const newid = Object.values(mapdict);

                        for (let i=0;i<oldid.length;i++){
                            const ockey = oldid[i];
                            // @ts-ignore
                            const nckey = mapdict[ockey];
                            // @ts-ignore
                            const gpl = gates[ockey].gpin;
                            for (let i=0;i<gpl.length;i++){
                                const pin = gpl[i];
                                if(pin.connected!=nonepin){
                                    const cpin = pin.connected;
                                    if(oldid.includes(String(cpin.superid))){
                                        // @ts-ignore
                                        gates[mapdict[cpin.superid]].gpout[cpin.id].connected.push([nckey,pin.id]);
                                        // @ts-ignore
                                        gates[nckey].gpin[i].connected = gates[mapdict[cpin.superid]].gpout[cpin.id];
                                    }
                                }
                            }
                        }

                        console.log('alrrrrrrrr\n');
                        for(const comp of Object.values(gates)){
                            comp.chosen = false;
                            if(comp.nchosen){
                                comp.nchosen = false;
                                comp.chosen = true;
                            }
                        }



                        //
                    }
                }
                else{
                    if(!rused){
                        chosen = false;
                        for (const comp of Object.values(gates)){
                            comp.chosen = false;
                        }
                        rightdrag = true;
                        drag = false;
                        drsx = amposx, drsy = amposy;
                    }
                    
                }


            }
            //右键删除导线,开始选择
            else{
                let cdt = true;
                //右键删除导线
                for(const comp of Object.values(gates)){
                    for (const pin of comp.gpin){
                        if(pin.linetouch){
                            cdt = false;
                            const cpout = pin.connected;
                            const index = cpout.connected.indexOf([pin.spuerid,pin.id]);
                            // @ts-ignore
                            gates[cpout.superid].gpout[cpout.id].connected.splice(index,1);
                            pin.connected = nonepin;
                            prerun(0);
                        }
                    }
                }
                //右键开始选择
                if(cdt){
                    rightdrag = true;
                    drag = false;
                    drsx = amposx, drsy = amposy;
                }
            }
        }
        ////////鼠标松开
        else{
            //结束导线拖动
            if(drag&&tline){
                if(dragpin[2] == 0){
                    // @ts-ignore
                    let bpin = gates[dragpin[0]].gpin[dragpin[1]];
                    bpin.chosen = false;
                    for(const comp of Object.values(gates)){
                        for(const pin of comp.gpout){
                            if(pin.touch){
                                pin.connected.push([bpin.superid,bpin.id]);
                                // @ts-ignore
                                bpin.connected = pin; 
                            }   
                        }
                    }    
                }
                else{
                    // @ts-ignore
                    let bpin = gates[dragpin[0]].gpout[dragpin[1]];
                    bpin.chosen = false;
                    for(const comp of Object.values(gates)){
                        for(const pin of comp.gpin){
                            if(pin.touch){
                                bpin.connected.push([pin.superid,pin.id]);
                                // @ts-ignore
                                const cpout = pin.connected
                                if(cpout!=nonepin){
                                    const index = cpout.connected.indexOf([pin.spuerid,pin.id]);
                                    // @ts-ignore
                                    gates[cpout.superid].gpout[cpout.id].connected.splice(index,1);
                                }
                                
                                //pin.connected = nonepin;
                                pin.connected = bpin; 
                            }   
                        }
                    }
                }
                prerun(0);
            }
            //结束原件拖动
            if(dragmode==1){
                if(mposx>rightsidex){
                    dpop(dragid);
                    prerun(0);
                }
                // @ts-ignore
                else if(gates[dragid].type=='switchbutton'){
                    if (holdframe < 10){
                        // @ts-ignore
                        gates[dragid].bstate = 1-gates[dragid].bstate;
                        prerun(0);
                    }
                }
            }
            if(dragmode==3){
                if(mposx>rightsidex){
                    chosen = false;
                    for (const comp of Object.values(gates)){
                        if(comp.chosen){
                            dpop(comp.id);
                        }
                    }
                    prerun(0);
                }
            }
            //结束右键选择拖动
            if(rightdrag){
                let cdt = false;
                for(const comp of Object.values(gates)){
                    if(comp.chosen){
                        cdt = true;
                        break;
                    }
                }
                if(cdt){
                    rightdrag = false;
                    chosen = true;
                    cbx = drsx;
                    cby = drsy;
                    cfx = amposx;
                    cfy = amposy;
                }
                else{
                    rightdrag = false;
                }
            }
            //复位
            holdframe = 0
            rholdframe = 0
            rused = false;
            drag = false;
            dragmode = -1;
            tline = false;
            // dragid = -1;
            // dragpin = [-1,-1];
            // dsx = 0;
            // dsy = 0;
        }
    }

    

    }
    //showcredit
    else{
        //document.getElementById("credit").style.display = 'none';
    }

    
} 








// @ts-ignore
function downloadFile(content, name) {
    const textContent = content;
    const filename = name;
    // 创建Blob对象
    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    
    // 创建下载链接
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    
    link.href = url;
    link.download = filename;
    link.style.display = 'none';
    
    // 添加到文档并触发点击
    document.body.appendChild(link);
    link.click();
    
    // 清理
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    // 显示成功状态
    //showStatus(`文件 "${filename}" 下载成功！`, 'success');
}


// @ts-ignore
function choosepreset(id){
    switch (id) {
        case 0:
            uploadgates(xorjson);
            break;
        case 1:
            uploadgates(addjson);
            break;
        case 2:
            uploadgates(CLAjson);
            break;
        case 3:
            uploadgates(pencoderjson);
            break;
        case 4:
            uploadgates(decoderjson);
            break;
        case 5:
            uploadgates(rsnorjson);
            break;
        case 6:
            uploadgates(msrsjson);
            break;
        case 7:
            uploadgates(jkjson);
            break;
        case 8:
            uploadgates(gdjson);
            break;
        case 9:
            uploadgates(complementerjson);
            break;
        case 10:
            uploadgates(subtracterjson);
            break;
        case 11:
            uploadgates(mpljson);
            break;
        default:
            break;
    }
}



// @ts-ignore
function uploadgates(ffcontent){
    console.log('loading...');
    try {
        
        let content = ffcontent['content'];
        gates = {};
        for (const key in content){
            const compjson = content[key];
            // @ts-ignore
            gates[key] = gettypeclass(compjson['type'], parseInt(key), compjson['x'], compjson['y']);
            //dpush(compjson['type'], compjson['x'], compjson['y']);
        }
        for (const ckey in content){
            const compjson = content[ckey];
            for (const pkey in compjson['gpout']){
                const pinjson = compjson['gpout'][pkey];
                for (const connjson of pinjson['connected']){
                    // @ts-ignore
                    gates[ckey].gpout[pkey].connected.push(
                        // @ts-ignore
                        [connjson['superid'], connjson['id']]
                    );
                }
            }
            for (const pkey in compjson['gpin']){
                const pinjson = compjson['gpin'][pkey];
                if(pinjson['connected']!='none'){
                    // @ts-ignore
                    gates[ckey].gpin[pkey].connected = 
                        // @ts-ignore
                        gates[pinjson['connected']['superid']].gpout[pinjson['connected']['id']];
                }
            }
        }
        gatecount = ffcontent['gatecount'];
        running = false;
        //console.log('success load');
        prerun(3);
    } catch (error) {
        console.log('failed to load:(')
        gatecount = 0;
        gates = {};
    }
    
}



// @ts-ignore
function strify(pg){
    console.log('bgstrify');
    let fljson = {};
    for (const key in pg){
        const comp = pg[key];
        const cjson = {};
        cjson['type'] = comp.type;
        cjson['id'] = comp.id;
        cjson['x'] = comp.x;
        cjson['y'] = comp.y;
        // @ts-ignore
        cjson['gpout'] = [];
        // @ts-ignore
        cjson['gpin'] = [];
        for (const pin of comp.gpout){
            const pjson = {};
            pjson['superid'] = pin.superid;
            pjson['id'] = pin.id;
            pjson['type'] = pin.type;
            const conns = [];
            for (const conn of pin.connected){
                const pcjson = {};
                pcjson['superid'] = conn.superid;
                pcjson['id'] = conn.id;
                conns.push(pcjson);
            }
            pjson['connected'] = conns;
            cjson['gpout'].push(pjson);
        }
        for (const pin of comp.gpin){
            const pjson = {};
            pjson['superid'] = pin.superid;
            pjson['id'] = pin.id;
            pjson['type'] = pin.type;
            
            if (pin.connected!=nonepin){
                const conns = {};
                conns['superid'] = pin.connected.superid;
                conns['id'] = pin.connected.id;
                conns[' type'] = pin.connected.type;
                // @ts-ignore
                pjson['connected'] = conns;
            }
            else{
                // @ts-ignore
                pjson['connected'] = 'none';
            }
            
            cjson['gpin'].push(pjson);
        }
        // @ts-ignore
        fljson[key] = cjson;
    }
    console.log(fljson)
    //console.log(fljson[0]);
    //console.log(fljson[0]['gpin']);
    console.log('endstrify');
    let ffjson = {};
    ffjson['content'] = fljson;
    ffjson['gatecount'] = gatecount;
    return ffjson;
}







let gates = {};
let gatecount = 0;


// @ts-ignore
function gettypeclass(type,id,clx,cly){
    let cl = null;
    //////////
    if(type=='andgate'){
        cl = new andgate(id,clx,cly);
    }
    else if(type=='orgate'){
        cl = new orgate(id,clx,cly);
    }
    else if(type=='notgate'){
        cl = new notgate(id,clx,cly);
    }
    else if(type=='xorgate'){
        cl = new xorgate(id,clx,cly);
    }
    else if(type=='triandgate'){
        cl = new triandgate(id,clx,cly);
    }
    else if(type=='triorgate'){
        cl = new triorgate(id,clx,cly);
    }
    else if(type=='norgate'){
        cl = new norgate(id,clx,cly);
    }
    else if(type=='nandgate'){
        cl = new nandgate(id,clx,cly);
    }
    //////////
    else if(type=='alwaystrue'){
        cl = new alwaystrue(id,clx,cly);
    }
    else if(type=='alwaysfalse'){
        cl = new alwaysfalse(id,clx,cly);
    }
    else if(type=='switchbutton'){
        cl = new switchbutton(id,clx,cly);
    }
    else if(type=='upnode'){
        cl = new upnode(id,clx,cly);
    }
    else if(type=='downnode'){
        cl = new downnode(id,clx,cly);
    }
    else if(type=='clk'){
        cl = new clk(id,clx,cly);
    }
    else if(type=='outputbulb'){
        cl = new outputbulb(id,clx,cly);
    }
    /////////
    else if(type=='JKflipflop'){
        cl = new JKflipflop(id,clx,cly);
    }
    else if(type=='Tflipflop'){
        cl = new Tflipflop(id,clx,cly);
    }
    else if(type=='petDflipflop'){
        console.log('p')
        cl = new petDflipflop(id,clx,cly);
    }
    else if(type=='Dflipflop'){
        cl = new Dflipflop(id,clx,cly);
    }
    else if(type=='counter'){
        cl = new counter(id,clx,cly);
    }
    ////////
    else if(type=='fulladder'){
        cl = new fulladder(id,clx,cly);
    }
    else if(type=='complementer'){
        cl = new complementer(id,clx,cly);
    }
    else if(type=='encoder'){
        cl = new encoder(id,clx,cly);
    }
    else if(type=='pencoder'){
        cl = new pencoder(id,clx,cly);
    }
    else if(type=='decoder'){
        cl = new decoder(id,clx,cly);
    }
    else if(type=='addressmux'){
        cl = new addressmux(id,clx,cly);
    }
    else if(type=='dmx'){
        cl = new dmx(id,clx,cly);
    }
    else if(type=='leftshifter'){
        cl = new leftshifter(id,clx,cly);
    }
    else if(type=='rightshifter'){
        cl = new rightshifter(id,clx,cly);
    }
    return cl
}



// @ts-ignore
function dpush(type,clx,cly){
    
    // @ts-ignore
    gates[gatecount] = gettypeclass(type,gatecount,clx,cly);
    gatecount += 1;
}

// @ts-ignore
function dpop(id){
    // @ts-ignore
    for (const pin of gates[id].gpout){
        const pcl = pin.connected;
        for (const pc of pcl){
            // @ts-ignore
            if(gates[pc[0]]!=undefined){
                // @ts-ignore
                gates[pc[0]].gpin[pc[1]].connected = nonepin;
            }
            
        }
    }
    // @ts-ignore
    for (const pin of gates[id].gpin){
        if(pin.connected!=nonepin){
            const op = pin.connected;
            const index = op.connected.indexOf(pin);
            if (index > -1) {
                op.connected.splice(index, 1);
            }
        }
    }
    
    // @ts-ignore
    
    delete gates[id];
}







let lastTime = 0;
let timeclk = 0;
let ftc = 0;
const fps = 50;
const renderfps = 30;
const interval = 1000 / fps;


// @ts-ignore
function animate(timestamp) {
    requestAnimationFrame(animate);
    
    const delta = timestamp - lastTime;
    
    if (delta >= interval) {
        update();
        render();
        
        lastTime = timestamp - (delta % interval);
    }

    if(running||runmode==1){
        if(timeclk==clockspeed){
            timeclk = 0;
        }
        else{
            timeclk += 1;
        }
        if(ftc==10){
            ftc = 0;
            rps = runtimes*5;
            runtimes = 0;
        }
        else{
            ftc += 1;
        }
    }
}



animate(1);


