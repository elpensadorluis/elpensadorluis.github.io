var a = [10,6,1];
var b = 12;
var c = [];
var cnt = 0;

c.push({"id":b.toString(), "parientId": ""});

function diferencia(af,bf,cf) {
    if (c[cf].id > 0) {
        for (var i = 0; i < a.length; i++){
            if (a[i]<=c[cf].id) {
                var tmp = c[cf].id - a[i];
                c.push({"id":tmp.toString(), "parentId":c[cf].id.toString()})
                cnt++;
            }                      
        }
    }
}

for (var j = 0; j < c.length; j++) {
    diferencia(a,c[j].id,j);    
}

var tabla = d3.stratify()(c);