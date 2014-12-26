//
//  Start with top-level agency:
//  http://webservices.nextbus.com/service/publicXMLFeed?command=agencyList
//     <body copyright="All data copyright agencies listed below and NextBus Inc 2014.">
//     ...
//     <agency tag="sf-muni" title="San Francisco Muni" shortTitle="SF Muni" regionTitle="California-Northern"/>
//     ...
//     </body>
//
//  Per-agency, routes:
//  http://webservices.nextbus.com/service/publicXMLFeed?command=routeList&a=sf-muni
// 
//     <body copyright="All data copyright San Francisco Muni 2014.">
//     ...
//     <route tag="19" title="19-Polk"/>
//     ...
//     </body>
//
//  Per-route, get top-level info by:
//  http://webservices.nextbus.com/service/publicXMLFeed?command=routeConfig&a=sf-muni&r=19
//  List of stops, then list of direction tags (may reuse stops)
//     <body copyright="All data copyright San Francisco Muni 2014.">
//     <route tag="19" title="19-Polk" color="000000" oppositeColor="ffffff" latMin="37.7279199" latMax="37.8063799" lonMin="-122.4236999" lonMax="-122.36545">
//     <stop tag="3093" title="Beach St & Polk St" lat="37.8063799" lon="-122.42319" stopId="13093"/>
//     <stop tag="5992" title="Polk St & North Point St" lat="37.8050199" lon="-122.4236999" stopId="15992"/>
//     ....
//     <stop tag="4845" title="Larkin St & Beach St" lat="37.80635" lon="-122.42208" stopId="14845"/>
//     <stop tag="33093" title="Beach St & Polk St" lat="37.8063799" lon="-122.42319" stopId="133093"/>
//     ...
//     <direction tag="19_IB1" title="Inbound to Fisherman's Wharf" name="Inbound" useForUI="true">
//     ...
//     <stop tag="4845"/>
//     <stop tag="33093"/>
//     </direction>
//     <direction tag="19_OB1" title="Outbound to Hunter's Point" name="Outbound" useForUI="true">
//     <stop tag="3093"/>
//     <stop tag="5992"/>
//     ...
//     </direction>
//     <path>
//     <point lat="37.79174" lon="-122.42083"/>
//     <point lat="37.7935" lon="-122.42119"/>
//     ...
//     </path>
//     <path>
//     <point lat="37.75489" lon="-122.40057"/>
//     <point lat="37.75744" lon="-122.40082"/>
//     ...
//     </path>
//     </route>
//     </body>
//
//  Predictions for stops:
//   http://webservices.nextbus.com/service/publicXMLFeed?command=predictionsForMultiStops&a=sf-muni&stops=19|3093&stops=19|4845
//   <body copyright="All data copyright San Francisco Muni 2014.">
//   <predictions agencyTitle="San Francisco Muni" routeTitle="19-Polk" routeTag="19" stopTitle="Beach St & Polk St" stopTag="3093">
//   <direction title="Outbound to Hunter's Point">
//   <prediction epochTime="1419579900000" seconds="1524" minutes="25" isDeparture="true" affectedByLayover="true" dirTag="19_OB1" vehicle="8178" block="1909" tripTag="6470522"/>
//   <prediction epochTime="1419583500000" seconds="5124" minutes="85" isDeparture="true" affectedByLayover="true" dirTag="19_OB1" vehicle="8339" block="1905" tripTag="6470524"/>
//   </direction>
//   <message text="For real time srv alerts follow us on Twitter: sfmta_muni" priority="Low"/>
//   <message text="Sunday service today." priority="High"/>
//   </predictions>
//   <predictions agencyTitle="San Francisco Muni" routeTitle="19-Polk" routeTag="19" stopTitle="Larkin St & Beach St" stopTag="4845">
//   <direction title="Inbound to Fisherman's Wharf">
//   <prediction epochTime="1419579190682" seconds="815" minutes="13" isDeparture="false" dirTag="19_IB1" vehicle="8178" block="1909" tripTag="6470586"/>
//   <prediction epochTime="1419582775485" seconds="4399" minutes="73" isDeparture="false" affectedByLayover="true" dirTag="19_IB1" vehicle="8339" block="1905" tripTag="6470588"/>
//   </direction>
//   <message text="For real time srv alerts follow us on Twitter: sfmta_muni" priority="Low"/>
//   <message text="Sunday service today." priority="High"/>
//   </predictions>
//   </body>
//