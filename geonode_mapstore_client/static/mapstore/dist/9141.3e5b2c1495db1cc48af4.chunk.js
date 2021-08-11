(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[9141],{18334:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u,j:()=>c});var o=r(13580),n=r(49179),a=r(2285),i=function(){this.dataProjection=null,this.defaultFeatureProjection=null};i.prototype.getReadOptions=function(e,t){var r;return t&&(r={dataProjection:t.dataProjection?t.dataProjection:this.readProjection(e),featureProjection:t.featureProjection}),this.adaptOptions(r)},i.prototype.adaptOptions=function(e){return(0,o.f0)({dataProjection:this.dataProjection,featureProjection:this.defaultFeatureProjection},e)},i.prototype.getLastExtent=function(){return null},i.prototype.getType=function(){return(0,n.O3)()},i.prototype.readFeature=function(e,t){return(0,n.O3)()},i.prototype.readFeatures=function(e,t){return(0,n.O3)()},i.prototype.readGeometry=function(e,t){return(0,n.O3)()},i.prototype.readProjection=function(e){return(0,n.O3)()},i.prototype.writeFeature=function(e,t){return(0,n.O3)()},i.prototype.writeFeatures=function(e,t){return(0,n.O3)()},i.prototype.writeGeometry=function(e,t){return(0,n.O3)()};const u=i;function c(e,t,r){var o,n=r?(0,a.U2)(r.featureProjection):null,i=r?(0,a.U2)(r.dataProjection):null;if(o=n&&i&&!(0,a.OP)(n,i)?Array.isArray(e)?(0,a.$A)(e,i,n):(t?e.clone():e).transform(t?n:i,t?i:n):e,t&&r&&void 0!==r.decimals&&!Array.isArray(o)){var u=Math.pow(10,r.decimals);o===e&&(o=e.clone()),o.applyTransform((function(e){for(var t=0,r=e.length;t<r;++t)e[t]=Math.round(e[t]*u)/u;return e}))}return o}},69141:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g});var o=r(38906),n=r(23068),a=r(18334),i=r(98968),u=r(98090),c=r(44538),p=r(25642),s=r(52329),y=r(13987),d=r(52043),f=r(15265),O=r(13580),m=r(2285),l=r(28795);function j(e,t){if(!e)return null;var r;switch(e.type){case l.Z.POINT:r=function(e){return new d.Z(e.coordinates)}(e);break;case l.Z.LINE_STRING:r=function(e){return new c.Z(e.coordinates)}(e);break;case l.Z.POLYGON:r=function(e){return new f.ZP(e.coordinates)}(e);break;case l.Z.MULTI_POINT:r=function(e){return new s.Z(e.coordinates)}(e);break;case l.Z.MULTI_LINE_STRING:r=function(e){return new p.Z(e.coordinates)}(e);break;case l.Z.MULTI_POLYGON:r=function(e){return new y.Z(e.coordinates)}(e);break;case l.Z.GEOMETRY_COLLECTION:r=function(e,t){var r=e.geometries.map((function(e){return j(e,undefined)}));return new u.default(r)}(e);break;default:throw new Error("Unsupported GeoJSON type: "+e.type)}return(0,a.j)(r,!1,t)}function h(e,t){var r,o=(e=(0,a.j)(e,!0,t)).getType();switch(o){case l.Z.POINT:r=function(e,t){return{type:"Point",coordinates:e.getCoordinates()}}(e);break;case l.Z.LINE_STRING:r=function(e,t){return{type:"LineString",coordinates:e.getCoordinates()}}(e);break;case l.Z.POLYGON:r=function(e,t){var r;return t&&(r=t.rightHanded),{type:"Polygon",coordinates:e.getCoordinates(r)}}(e,t);break;case l.Z.MULTI_POINT:r=function(e,t){return{type:"MultiPoint",coordinates:e.getCoordinates()}}(e);break;case l.Z.MULTI_LINE_STRING:r=function(e,t){return{type:"MultiLineString",coordinates:e.getCoordinates()}}(e);break;case l.Z.MULTI_POLYGON:r=function(e,t){var r;return t&&(r=t.rightHanded),{type:"MultiPolygon",coordinates:e.getCoordinates(r)}}(e,t);break;case l.Z.GEOMETRY_COLLECTION:r=function(e,t){return{type:"GeometryCollection",geometries:e.getGeometriesArray().map((function(e){var r=(0,O.f0)({},t);return delete r.featureProjection,h(e,r)}))}}(e,t);break;case l.Z.CIRCLE:r={type:"GeometryCollection",geometries:[]};break;default:throw new Error("Unsupported geometry type: "+o)}return r}const g=function(e){function t(t){var r=t||{};e.call(this),this.dataProjection=(0,m.U2)(r.dataProjection?r.dataProjection:"EPSG:4326"),r.featureProjection&&(this.defaultFeatureProjection=(0,m.U2)(r.featureProjection)),this.geometryName_=r.geometryName,this.extractGeometryName_=r.extractGeometryName}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.readFeatureFromObject=function(e,t){var r,o=j((r="Feature"===e.type?e:{type:"Feature",geometry:e,properties:null}).geometry,t),a=new n.Z;return this.geometryName_?a.setGeometryName(this.geometryName_):this.extractGeometryName_&&"geometry_name"in r!==void 0&&a.setGeometryName(r.geometry_name),a.setGeometry(o),"id"in r&&a.setId(r.id),r.properties&&a.setProperties(r.properties),a},t.prototype.readFeaturesFromObject=function(e,t){var r=null;if("FeatureCollection"===e.type){r=[];for(var o=e.features,n=0,a=o.length;n<a;++n)r.push(this.readFeatureFromObject(o[n],t))}else r=[this.readFeatureFromObject(e,t)];return r},t.prototype.readGeometryFromObject=function(e,t){return j(e,t)},t.prototype.readProjectionFromObject=function(e){var t,r=e.crs;return r?"name"==r.type?t=(0,m.U2)(r.properties.name):(0,o.h)(!1,36):t=this.dataProjection,t},t.prototype.writeFeatureObject=function(e,t){t=this.adaptOptions(t);var r={type:"Feature",geometry:null,properties:null},o=e.getId();void 0!==o&&(r.id=o);var n=e.getGeometry();n&&(r.geometry=h(n,t));var a=e.getProperties();return delete a[e.getGeometryName()],(0,O.xb)(a)||(r.properties=a),r},t.prototype.writeFeaturesObject=function(e,t){t=this.adaptOptions(t);for(var r=[],o=0,n=e.length;o<n;++o)r.push(this.writeFeatureObject(e[o],t));return{type:"FeatureCollection",features:r}},t.prototype.writeGeometryObject=function(e,t){return h(e,this.adaptOptions(t))},t}(i.Z)},98968:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var o=r(49179),n=r(18334),a=r(34007);function i(e){return"string"==typeof e?JSON.parse(e)||null:null!==e?e:null}const u=function(e){function t(){e.call(this)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.getType=function(){return a.Z.JSON},t.prototype.readFeature=function(e,t){return this.readFeatureFromObject(i(e),this.getReadOptions(e,t))},t.prototype.readFeatures=function(e,t){return this.readFeaturesFromObject(i(e),this.getReadOptions(e,t))},t.prototype.readFeatureFromObject=function(e,t){return(0,o.O3)()},t.prototype.readFeaturesFromObject=function(e,t){return(0,o.O3)()},t.prototype.readGeometry=function(e,t){return this.readGeometryFromObject(i(e),this.getReadOptions(e,t))},t.prototype.readGeometryFromObject=function(e,t){return(0,o.O3)()},t.prototype.readProjection=function(e){return this.readProjectionFromObject(i(e))},t.prototype.readProjectionFromObject=function(e){return(0,o.O3)()},t.prototype.writeFeature=function(e,t){return JSON.stringify(this.writeFeatureObject(e,t))},t.prototype.writeFeatureObject=function(e,t){return(0,o.O3)()},t.prototype.writeFeatures=function(e,t){return JSON.stringify(this.writeFeaturesObject(e,t))},t.prototype.writeFeaturesObject=function(e,t){return(0,o.O3)()},t.prototype.writeGeometry=function(e,t){return JSON.stringify(this.writeGeometryObject(e,t))},t.prototype.writeGeometryObject=function(e,t){return(0,o.O3)()},t}(n.Z)}}]);