//mini áéíóú

!function(e,t,a){e.fn.tinyNav=function(n){var i=e.extend({active:"selected",header:"",indent:"- ",label:""},n);return this.each(function(){a++;var n=e(this),l="tinynav",d=l+a,r=".l_"+d,o=e("<select/>").attr("id",d).addClass(l+" "+d);if(n.is("ul,ol")){""!==i.header&&o.append(e("<option/>").text(i.header));var s="";n.addClass("l_"+d).find("a").each(function(){s+='<option value="'+e(this).attr("href")+'">';var t;for(t=0;t<e(this).parents("ul, ol").length-1;t++)s+=i.indent;s+=e(this).text()+"</option>"}),o.append(s),i.header||o.find(":eq("+e(r+" li").index(e(r+" li."+i.active))+")").attr("selected",!0),o.change(function(){t.location.href=e(this).val()}),e(r).after(o),i.label&&o.before(e("<label/>").attr("for",d).addClass(l+"_label "+d+"_label").append(i.label))}})}}(jQuery,this,0);
