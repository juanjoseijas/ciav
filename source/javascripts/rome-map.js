// Google Maps


//var infowindow = null;
    $(document).ready(function () { initialize();  });

function initialize() {

var sources = [  

['Marker 1', 41.8922,12.4852, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Roma<div>'],
['Marker 2', 41.012379,28.975926, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Byzantium<div>'],
['Marker 3', 37.971687,23.726464, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Athenae<div>'],
['Marker 4', 45.760726,4.827423, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Lugdunum<div>'],
['Marker 5', 49.756227,6.64376, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Treverorum<div>'],
['Marker 6', 51.5125,0.0906, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Londinium<div>'],
['Marker 7', 36.853056,10.323056, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Carthago<div>'],
['Marker 8', 31.195371,29.904133, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Alexandria<div>'],
['Marker 9', 31.776667,35.234167, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Ierusalem<div>'],
['Marker 10', 36.200663,36.165318, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Antiochia<div>'],
['Marker 10', 37.441289,-6.046355, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Italica<div>'],
['Marker 10', 40.099665, -8.494551, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Conimbriga<div>'],



['Marker 11', 41.115232,1.257436, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Tarraco<div>'],
['Marker 11', 37.605528, -0.933838, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Cartago Nova<div>'],
['Marker 11', 43.305194, 5.350342, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Massillia<div>'],
['Marker 11', 38.771216, -9.217529, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Olissipo<div>'],
['Marker 11', 47.211665, -1.567355, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Portus Namnetum<div>'],
['Marker 11', 43.382168, -3.206565, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Flaviobriga, Portus Amanum<div>'],
['Marker 11', 43.448146, -3.826714, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Portus Victrix, Portus Victoriae Iuliobrigensium<div>'],
['Marker 11', 44.839745, -0.565279, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Burdigala <div>'],
['Marker 11', 41.141823, -8.658721, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Portus Galum, Portus Cale<div>'],
['Marker 10', 44.325395,8.510096, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Alba Docilia<div>'], 
['Marker 10', 44.377370,8.633105, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ad Navalia<div>'], 
['Marker 10', 44.422373,8.744872, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Hasta<div>'], 
['Marker 10', 44.395427,8.867501, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Sestri Ponente<div>'], 
['Marker 10', 44.410025,8.919832, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Genua<div>'], 
['Marker 10', 44.358043,9.140469, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ricina<div>'], 
['Marker 10', 44.347598,9.152445, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Delphinis<div>'],
['Marker 10', 39.912462,9.706108, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Sulicis</div>'], 
['Marker 10', 39.833966,9.686434, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Custodia Rubriensis</div>'], 
['Marker 10', 39.666510,9.657261, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Saralapis</div>'], 
['Marker 10', 41.383656,9.145594, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Pallas</div>'],
['Marker 10', 41.394235,9.123549, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Marianon</div>'], 
['Marker 10', 41.458523,9.059511, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Phikaria</div> ' ],
['Marker 10', 41.516018,8.877132, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Titianus Portus</div> ' ],
['Marker 10', 41.704970,8.801601, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Pauka</div>'  ],
['Marker 10', 41.919715,8.746518, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Agiation</div> '],
['Marker 10', 42.047615,8.735800, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ourkinion</div>'  ],
['Marker 10', 42.109704,8.690815, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Saone</div>'],
['Marker 10', 42.808267,9.329736, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kanelate</div>'],
['Marker 10', 42.966684,9.344882, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kentourinon</div>'],
['Marker 10', 40.307796,9.111677, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Sardinia</div>'],
['Marker 10', 40.922944,9.530092, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Olblianus</div>'],
['Marker 10', 40.784988,9.675812, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Coclearia</div>'],
['Marker 10', 40.799268,14.339992, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Herculaneum</div>'],  
['Marker 10', 40.749647,14.439303, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Oplontis</div>'],  
['Marker 10', 40.727386,14.466316, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Pompeia</div>'],  
['Marker 10', 40.702222,14.472574, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Stabiae</div>'],  
['Marker 10', 40.663923,14.418515, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Aequana</div>'],
['Marker 10', 38.843608,22.456406, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Antikyra<div>'], 
['Marker 10', 38.887995,22.470758, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Lamia<div>'],  
['Marker 10', 38.897788,22.613252, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Phalara<div>'],
['Marker 10', 38.881082,22.706867, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Echinus<div>'], 
['Marker 10', 38.882090,22.802850, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Alope<div>'],
['Marker 10', 38.572494,23.769356, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div> Euboea<div>'], 
['Marker 10', 38.845918,22.829892, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Dion<div>'],
['Marker 10', 38.839997,22.976150, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Athenai Diades<div>'], 
['Marker 10', 38.847307,23.049194, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Aedepsus<div>'], 
['Marker 10', 38.817661,23.210014, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Orobiai<div>'], 
['Marker 10', 38.758505,23.318635, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Elymnio<div>'],
['Marker 11', 35.891195, -5.313258, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ad Septem Fratres, Herculesum Fretum<div>'],
['Marker 10', 45.372951,36.628000, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Parthenion</div>'],
['Marker 10', 45.476783,36.337184, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Zenonos Chersonesos</div>'],
['Marker 10', 45.459174,35.843472, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Heracleon</div>'],
['Marker 10', 47.086601,37.637411, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Hygreis </div>'],
['Marker 10', 47.117765,38.526526, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Karoia </div>'],
['Marker 10', 47.268109,39.335434, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Tanaïs </div>'],
['Marker 10', 47.026095,39.239728, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Paniardis</div>'], 
['Marker 10', 46.743056,38.417705, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Pataroue </div>'],
['Marker 10', 45.999867,38.139734, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Azara </div>'],
['Marker 10', 45.354659,37.131895, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Tyrambe </div>'],
['Marker 10', 45.439420,36.769743, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Achillion</div>'],
['Marker 10', 45.313152,36.853760, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Patrasys </div>'],
['Marker 10', 45.294983,36.982623, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kepoi </div>'],
['Marker 10', 45.279753,36.945466, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Phanagoria </div>'],
['Marker 10', 45.227344,36.719189, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Hermonassa </div>'],
['Marker 10', 45.213532,36.614144, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Korokondame </div>'],
['Marker 10', 43.379923,40.009349, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>outlet of R Borgys</div>'], 
['Marker 10', 42.812154,41.121505, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>R Hippus</div>'], 
['Marker 10', 36.072135,28.019486, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Lartos</div>'], 
['Marker 10', 36.064175,27.998721, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ampelia</div>'],
['Marker 10', 36.014932,27.931003, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Gennadi</div>'],
['Marker 10', 35.926334,27.856003, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ixia</div>'], 
['Marker 10', 35.914068,27.838705, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Germatos</div>'],
['Marker 10', 35.872159,27.748549, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Mnasyrion</div>'],
['Marker 10', 35.889702,27.765101, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Vroulia</div>'], 
['Marker 10', 35.964573,27.727844, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kattabia</div>'], 
['Marker 10', 36.059066,27.754248, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kalogeros</div>'],
['Marker 10', 36.125049,27.709112, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kassaros</div>'],
['Marker 10', 36.171051,27.723935, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Batoklia</div>'],
['Marker 10', 36.191823,27.765186, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kymisala</div>'], 
['Marker 10', 36.274864,27.826488, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kretinia</div>'], 
['Marker 10', 38.339320,26.146252, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kontari</div>'], 
['Marker 10', 38.185646,26.032777, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Emporio </div>'], 
['Marker 10', 38.469212,25.919388, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kaukasa</div>'], 
['Marker 10', 38.592157,26.044002, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Amades </div>'], 
['Marker 10', 38.545592,26.113321, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Kardamyle</div>'],  
['Marker 10', 38.484775,26.129544, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Delphinion</div>'], 
['Marker 10', 38.442956,26.146200, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Milingos </div>'], 
['Marker 10', 38.417621,26.137764, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Brabantion</div>'], 
['Marker 10', 45.705510,13.708221, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Castellum Pucinum</div>'], 
['Marker 10', 45.649509,13.771666, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Tergeste</div>'], 
['Marker 10', 45.567684,13.726670, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Aegida</div>'], 
['Marker 10', 45.532793,13.556537, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Piranum</div>'], 
['Marker 10', 45.500183,13.500283, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Silvium</div>'], 
['Marker 10', 45.470622,13.502705, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Siparis</div>'], 
['Marker 10', 45.425208,13.514431, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Humagum</div>'], 
['Marker 10', 45.311472,13.553530, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Neapolis</div>'], 
['Marker 10', 45.223667,13.591143, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Parentium </div>'],
['Marker 10', 45.078323,13.634752, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ruginium </div>'],
['Marker 10', 38.511223,-8.891550, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Caetobriga</div>'],
['Marker 10', 43.442708,-4.037401, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Portus Blendium</div>'], 
['Marker 10', 43.395049,-4.380770, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Portus Veseasueca</div>'], 
['Marker 10', 43.544420,-5.652023, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Gigia</div>'], 
['Marker 10', 43.505312,-6.097233, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Flavionavia</div>'], 
['Marker 10', 43.692323,-7.582917, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Starbanhom</div>'], 
['Marker 10', 43.821319,-8.166673, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Cassiterides</div>'], 
['Marker 10', 43.251118,-8.903292, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Castellum Aviliobris</div>'], 
['Marker 10', 41.146507,-8.637420, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>R Durius</div>'], 
['Marker 10', 40.633151,-8.470014, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Talabriga</div>'], 
['Marker 10', 40.205265,-8.429767, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Aeminium</div>'],
['Marker 10', 39.407020,-9.208855, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Eburobrittium </div>'], 
['Marker 10', 54.083127,-0.159821, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Gabrantiucorum portuosus sinus</div>'], 
['Marker 10', 53.717785,-0.591028, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Petuaria</div>'], 
['Marker 10', 52.993961,0.633440, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Branodunum</div>'], 
['Marker 10', 52.582496,1.651465, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Gariannonum</div>'], 
['Marker 10', 51.867407,0.943043, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Camulodunum</div>'], 
['Marker 10', 51.728470,0.873512, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Othona Portus</div>'], 
['Marker 10', 51.403535,0.553763, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Durobrivae</div>'], 
['Marker 10', 51.380692,1.195164, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Regulbium</div>'], 
['Marker 10', 50.941937,0.754811, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Portus Lemanus</div>'], 
['Marker 10', 50.821313,-0.241879, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Novus Portus</div>'], 
['Marker 10', 50.829377,-0.816374, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>port of Noviomagus Regnorum</div>'], 
['Marker 10', 50.826951,-0.996456, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Magnus Portus</div>'],
['Marker 10', 50.769578,-1.291234, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Vecta</div>'], 
['Marker 10', 50.912094,-1.375100, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Clausentum</div>'], 
['Marker 10', 50.674872,-3.463765, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Isca Dumnoniorum</div>'], 
['Marker 10', 49.929793,-6.321576, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div> Sicdelis</div>'], 
['Marker 10', 51.480947,-2.649478, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Abona</div>'], 
['Marker 10', 51.609870,-2.776530, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Venta Silurum</div>'], 
['Marker 10', 51.444889,-3.129520, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Tamion</div>'], 
['Marker 10', 52.458867,4.666675, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Flevum</div>'],  
['Marker 10', 52.059003,4.348620, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Forum Hadriani</div>'],  
['Marker 10', 51.908592,4.034870, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Helinio</div>'],  
['Marker 10', 51.612180,3.837282, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ganuenta</div>'],  
['Marker 10', 51.274214,3.448188, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Rodanum</div>'], 
['Marker 10', 51.184083,3.003155, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Aldenburgensis</div>'],  
['Marker 10', 59.074366,-3.196805, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div> Orcades </div>'], 
['Marker 10', 54.987649,-1.532072, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Segedunum </div>'], 
['Marker 10', 55.004810,-1.431636, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Arbeia </div>'], 
['Marker 10', 51.855046,-4.303504, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Moridunum </div>'], 
['Marker 10', 53.252673,-3.129416, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Deva Victrix </div>'], 
['Marker 10', 53.915253,-3.002255, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Setantiorum Portus </div>'], 
['Marker 10', 54.054178,-2.805228, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Calunium </div>'], 
['Marker 10', 54.352566,-3.415718, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Glannoventa </div>'], 
['Marker 10', 54.573062,-3.590878, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Gabrosentum </div>'], 
['Marker 10', 54.660150,-3.571636, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Magis </div>'], 
['Marker 10', 54.955173,-3.212298, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Maia </div>'], 
['Marker 10', 54.933833,-3.134855, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Congavata</div>'], 
['Marker 10', 55.612490,-5.258440, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div> Clota in Hiverione </div>'], 
['Marker 10', 37.723107,-8.775907, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Patulus portus </div>'], 
['Marker 10', 36.995109,-8.941947, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Sacred Promontary</div>'], 
['Marker 10', 37.094423,-8.661373, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Lacobriga </div>'], 
['Marker 10', 36.976146,-7.874496, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Ossonoba </div>'], 
['Marker 10', 37.076532,-7.707139, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Balsa </div>'], 
['Marker 10', 37.244446,-6.938916, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Onuba </div>'], 
['Marker 10', 37.308446,-6.255266, 2,'http://ciav.s3.amazonaws.com/icon/port.png','','<div>Olontigi </div>'], 


['Marker 10', 37.290481,-6.054497, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Caura </div>'], 
['Marker 10', 37.356791,-6.041858, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Osset </div>'], 
['Marker 10', 37.388205,-5.990519, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Hispalis </div>'], 
['Marker 10', 37.517104,-5.976196, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Ilipa magna </div>'], 
['Marker 10', 37.274132,-6.004301, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Orippo </div>'], 
['Marker 10', 36.931378,-6.079337, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Nabrissa Veneria</div>'], 

['Marker 11', 36.536123,-6.278687, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Gades<div>'],
['Marker 11', 38.416065, -9.216196, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Promontorium Barbarium, Pirgo Barbarion<div>'],
['Marker 11', 38.367871,-8.514263, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Turris Salacinorum<div>'],
['Marker 11', 35.782625,-5.794372, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Tingi Mauretaniam, Thigge, Tingis, Thymiateria, Thymaterion <div>'],
['Marker 11', 43.386195, -8.406510, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Turris Brigantia<div>'],
['Marker 11', 42.675720,-8.726651, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Turris Augustis<div>'],
['Marker 10', 51.128380,1.322939, 3,'http://ciav.s3.amazonaws.com/icon/lighthouse.png','','<div>Portus Dubris</div>'],


['Marker 100', 43.027741, -7.797546, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Caranico (Friol)<div>'],
['Marker 101', 43.032761, -8.022766, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Cohors Celtiberum Cidadela (Sobrado dos Monxes)<div>'],
['Marker 102', 43.209680, -8.688812, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Atricondo (Carballo)<div>'],
['Marker 103', 43.095969, -8.914032, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Grandimiro (Brandomil, Zás)<div>'],
['Marker 104', 42.790740, -8.885021, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Ad Duos Pontes (Santa Cristina de Barro)<div>'],
['Marker 105', 42.608190, -9.001923, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Vicus Spacorum<div>'],
['Marker 106', 42.602631, -8.640747, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Aquis Celenis (Caldas de Reis)<div>'],
['Marker 107', 41.542506, -8.425140, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Bracara (Braga)<div>'],
['Marker 108', 41.650341, -8.283691, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Salaniana (Travassos)<div>'],
['Marker 109', 41.680625, -8.189702, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Aquis Originis (Baños de Riocaldo)<div>'],
['Marker 110', 42.032242, -7.973035, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Aquis Querquennis (Bande)<div>'],
['Marker 111', 42.249748, -7.525635, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Salientibus (Xinzo da Costa)<div>'],
['Marker 112', 42.317432, -7.327194, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Praesidio (Vilamaior)<div>'],
['Marker 113', 42.338547, -7.249734, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Nemetobriga (Pobla de Trives)<div>'],
['Marker 114', 42.418018, -7.011639, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Foro (Pobra de Valdeorras)<div>'],
['Marker 115', 42.505082, -6.872965, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Gemestario (Portela de Aguiar)<div>'],
['Marker 116', 42.598666, -6.725914, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Bergido (Cacabelos)<div>'],
['Marker 117', 42.622778, -6.434444, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Intereraconio Flavio (San Román de Bembibre)<div>'],
['Marker 118', 42.454930, -6.053251, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Asturica Augusta (Astorga)<div>'],
['Marker 119', 41.774384, -8.562469, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Limia<div>'],
['Marker 120', 42.049155, -8.646610, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Tude (Tuy)<div>'],
['Marker 121', 42.281852, -8.609170, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Burbida<div>'],
['Marker 122', 42.429885, -8.644620, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Turoqua<div>'],
['Marker 123', 42.745933, -8.655590, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Iria<div>'],
['Marker 124', 42.880556, -8.544745, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Asseconia<div>'],
['Marker 125', 42.913951, -8.014692, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Brevis<div>'],
['Marker 126', 42.964463, -7.712402, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Marcie<div>'],
['Marker 127', 42.893904, -7.250424, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Timalino<div>'],
['Marker 128', 42.918331, -7.208915, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Ponte Naviae<div>'],
['Marker 129', 42.656182, -6.902161, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Vitaris<div>'],
['Marker 129', 43.008664, -7.557220, 1,'http://ciav.s3.amazonaws.com/icon/city.png','','<div>Lucus (Lugo)<div>'],
['Marker 130', 41.634322, -8.141620, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Salacia (Vieira do Minho)<div>'],
['Marker 131', 41.826630, -7.787870, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Praesidio (Montalegre)<div>'],
['Marker 132', 41.726230, -7.750854, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Caladunum<div>'],
['Marker 133', 41.741781, -7.473165, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Aquae Flaviae (Chaves)<div>'],
['Marker 134', 41.608716, -7.310906, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Pinetum (Valpaços)<div>'],
['Marker 135', 41.830723, -7.009300, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Roboretum (Vinhais)<div>'],
['Marker 136', 41.806113, -6.756738, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Compleutica (Bragança)<div>'],
['Marker 137', 41.868690, -6.441686, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Veniatia (Figueruela de Arriba)<div>'],
['Marker 138', 42.072218, -6.013660, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Petavonium (Santibañez de Vidriales)<div>'],
['Marker 139', 42.312569, -5.975957, 4,'http://ciav.s3.amazonaws.com/icon/mansio.png','','<div>Argentiolum (Miñambres de la Valduerna)<div>']
];

var hercules = new google.maps.LatLng(43.385833, -8.406389);
var roma = new google.maps.LatLng(41.8922,12.4852);
var MY_MAPTYPE_ID = 'custom_style';

var featureOpts = [
          
        {
          "featureType": "landscape.man_made",
          "stylers": [
            { "visibility": "off" }
          ]
        },
          {
          "featureType": "landscape.natural",
          "stylers": [
            
            { "color": "#E2E0DC" }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
           
            { "color": "#F8F7F6" }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "labels",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
          "featureType": "transit",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "road",
          "stylers": [
            { "visibility": "off" }
          ]
        },{
          "featureType": "poi",
          "stylers": [
            { "visibility": "off" }
          ]
        },
        {
            "featureType": "administrative",
            "stylers": [
            { "visibility": "off" }
            ]
        }
        ];



var lines = [

//Green
    ['LAB046', 1, "#00FFBF", 2,
    new google.maps.LatLng(41.746726, 12.290955), // Roma
    new google.maps.LatLng(41.182788, 13.027039),
    new google.maps.LatLng(41.176587, 13.425293),
    new google.maps.LatLng(40.811730, 13.971863),
    new google.maps.LatLng(40.611867, 14.263000),
    new google.maps.LatLng(40.239702, 14.790344),
    new google.maps.LatLng(39.913950, 15.336914),
    new google.maps.LatLng(39.444678, 15.691223),
    new google.maps.LatLng(38.337348, 15.691223),
    new google.maps.LatLng(38.151837, 15.578613),
    new google.maps.LatLng(37.050793, 15.320435),
    new google.maps.LatLng(32.994843, 21.945190),
    new google.maps.LatLng(31.245682, 29.745483), //Alexandria
    new google.maps.LatLng(31.704803, 31.327515),
    new google.maps.LatLng(31.344254,32.728271)
    ],

    ['LAB047', 1, "#00FFBF", 2,
    new google.maps.LatLng(31.344254,32.728271),
    new google.maps.LatLng(31.367709,33.953247),
    new google.maps.LatLng(32.944149,34.903564),
    new google.maps.LatLng(36.200663,36.165318), //Antioquía
    new google.maps.LatLng(36.589068, 34.722290),
    new google.maps.LatLng(35.982451, 33.266602),
    new google.maps.LatLng(35.924645,32.398682),
    new google.maps.LatLng(36.430122,30.860596),
    new google.maps.LatLng(35.960223,29.685059),
    new google.maps.LatLng(36.505221, 28.240356),
    new google.maps.LatLng(36.496390, 26.823120),
    new google.maps.LatLng(37.448697, 26.328735),
    new google.maps.LatLng(37.965854, 26.460571),
    new google.maps.LatLng(38.216604, 26.185913),
    new google.maps.LatLng(39.414977, 25.504761)
    ],

    ['LAB048', 1, "#00FFBF", 2,
    new google.maps.LatLng(39.414977, 25.504761),
    new google.maps.LatLng(39.728313, 25.565186),
    new google.maps.LatLng(39.898148, 25.738220),
    new google.maps.LatLng(40.012891, 26.143341),
    new google.maps.LatLng(40.056001, 26.299896),
    new google.maps.LatLng(40.132691, 26.385727),
    new google.maps.LatLng(40.197233, 26.386414),
    new google.maps.LatLng(40.233936, 26.494217),
    new google.maps.LatLng(40.313567, 26.608200),
    new google.maps.LatLng(40.426565, 26.737289),
    new google.maps.LatLng(40.485604, 26.983795),
    new google.maps.LatLng(40.729568, 27.493286), 
    new google.maps.LatLng(40.854332, 27.905273), 
    new google.maps.LatLng(40.889639, 28.521881), 
    new google.maps.LatLng(41.012379,28.975926)
    ], //  Bizantium


    ['LAB049', 1, "#00FFBF", 2,
    new google.maps.LatLng(39.414977, 25.504761),
    new google.maps.LatLng(40.446947, 25.202637),
    new google.maps.LatLng(39.816975, 24.191895),
    new google.maps.LatLng(39.859155, 23.159180),
    new google.maps.LatLng(39.134321, 23.593140),
    new google.maps.LatLng(38.658705, 24.207001),
    new google.maps.LatLng(38.117272, 24.704132),
    new google.maps.LatLng(37.503189, 24.049072),
    new google.maps.LatLng(37.859676, 23.543701),
    new google.maps.LatLng(37.890028, 23.052063),
    new google.maps.LatLng(38.356734, 21.942444),
    new google.maps.LatLng(38.255436, 21.055298), 
    new google.maps.LatLng(38.601847, 20.437317), 
    new google.maps.LatLng(43.492783, 15.721436), 
    new google.maps.LatLng(45.552525, 13.194580)
    ], 

 // Yellow   

    ['LAB050', 1, "#DFFF7F", 2,
    new google.maps.LatLng(36.057981, -5.339355), // Columnae Herculis
    new google.maps.LatLng(35.380093, -4.592285),
    new google.maps.LatLng(35.585852, -2.922363),
    new google.maps.LatLng(36.040216, -0.812988),
    new google.maps.LatLng(37.09024, 3.098145),
    new google.maps.LatLng(37.247821, 7.492676),
    new google.maps.LatLng(37.439974, 10.096436),
    new google.maps.LatLng(37.186579, 11.118164),
    new google.maps.LatLng(35.406961, 11.217041),
    new google.maps.LatLng(33.376412, 11.502686),
    new google.maps.LatLng(33.109948, 13.216553),
    new google.maps.LatLng(32.713355, 15.336914), 
    new google.maps.LatLng(31.353637, 16.831055), 
    new google.maps.LatLng(30.552800, 19.434814), 
    new google.maps.LatLng(31.756196, 19.665527)
    ],

    ['LAB050', 1, "#DFFF7F", 2,
    new google.maps.LatLng(31.756196, 19.665527), // Columnae Herculis
    new google.maps.LatLng(32.481963, 19.973145),
    new google.maps.LatLng(32.870360, 21.027832),
    new google.maps.LatLng(33.073131, 21.522217),
    new google.maps.LatLng(33.045508, 22.445068),
    new google.maps.LatLng(32.741082, 23.225098),
    new google.maps.LatLng(32.398516, 23.499756),
    new google.maps.LatLng(32.119801, 24.785156),
    new google.maps.LatLng(32.119801, 24.785156),
    new google.maps.LatLng(31.690782, 26.510010),
    new google.maps.LatLng(31.475524, 27.509766),
    new google.maps.LatLng(31.344254, 27.850342),
    new google.maps.LatLng(31.015279, 29.058838),
    new google.maps.LatLng(31.081165, 29.454346),
    new google.maps.LatLng(31.195371, 29.904133)
    ], 

// Blue   

    ['LAB050', 1, "#3498db", 2,
    new google.maps.LatLng(41.746726, 12.290955),
    new google.maps.LatLng(42.269179, 10.788574),
    new google.maps.LatLng(42.236652, 9.821777),
    new google.maps.LatLng(42.593533,9.755859),
    new google.maps.LatLng(43.205176,9.656982),
    new google.maps.LatLng(43.921637, 9.810791),
    new google.maps.LatLng(44.300264, 8.833008),
    new google.maps.LatLng(43.012681, 6.525879),
    new google.maps.LatLng(43.141078,5.185547),
    new google.maps.LatLng(42.916206,3.218994),
    new google.maps.LatLng(42.008489,3.383789),
    new google.maps.LatLng(41.203456, 2.054443), 
    new google.maps.LatLng(39.647997, -0.032959), 
    new google.maps.LatLng(38.711233, 0.373535), 
    new google.maps.LatLng(37.596824,-0.593262)
    ], 

    // Blue   

    ['LAB050', 1, "#3498db", 2,
    new google.maps.LatLng(37.596824,-0.593262),
    new google.maps.LatLng(37.247821, -1.593018),
    new google.maps.LatLng(36.721274, -2.032471),
    new google.maps.LatLng(36.597889,-2.675171),
    new google.maps.LatLng(36.650793, -3.438721),
    new google.maps.LatLng(36.615528, -4.400024),
    new google.maps.LatLng(36.438961,-4.630737),
    new google.maps.LatLng(36.284135,-5.202026),
    new google.maps.LatLng(36.057981, -5.339355), // Columnae Herculis
    new google.maps.LatLng(36.151182,-6.119385),
    new google.maps.LatLng(36.677231,-6.514893),
    new google.maps.LatLng(36.96306,-6.877441),
    new google.maps.LatLng(36.932330, -7.904663), 
    new google.maps.LatLng(37.050793, -8.388062), 
    new google.maps.LatLng(36.949892, -9.003296)
    ], 


// Blue   

    ['LAB050', 1, "#3498db", 2,
    new google.maps.LatLng(36.949892, -9.003296),
    new google.maps.LatLng(37.983175, -9.096680),
    new google.maps.LatLng(38.363195, -9.239502),
    new google.maps.LatLng(38.681222,-9.547119),
    new google.maps.LatLng(39.389509, -9.514160),
    new google.maps.LatLng(40.672306, -8.860474),
    new google.maps.LatLng(41.224118, -8.794556),
    new google.maps.LatLng(42.208176, -8.970337),
    new google.maps.LatLng(42.547010, -9.143372), 
    new google.maps.LatLng(42.926263, -9.368591),
    new google.maps.LatLng(43.141078, -9.277954),
    new google.maps.LatLng(43.371116, -8.890686),
    new google.maps.LatLng(43.343158, -8.673706), 
    new google.maps.LatLng(43.386195, -8.406510), // Brigantium
    new google.maps.LatLng(43.640051, -8.355103)
    ], 

    ['LAB050', 1, "#3498db", 2,
    new google.maps.LatLng(43.640051, -8.355103),
    new google.maps.LatLng(43.818675, -7.888184),
    new google.maps.LatLng(43.723475, -7.333374),
    new google.maps.LatLng(43.608239, -6.940613),
    new google.maps.LatLng(43.711564, -5.852966),
    new google.maps.LatLng(43.510713, -4.976807),
    new google.maps.LatLng(43.544567, -3.804016),
    new google.maps.LatLng(43.450925, -3.078918),
    new google.maps.LatLng(43.53262, -2.71637), 
    new google.maps.LatLng(43.357138,-2.106628),
    new google.maps.LatLng(43.462887, -1.705627),
    new google.maps.LatLng(43.765144, -1.546326),
    new google.maps.LatLng(45.490946, -1.227722), 
    new google.maps.LatLng(46.377254, -1.722107), 
    new google.maps.LatLng(46.924007, -2.411499)
    ],

    ['LAB050', 1, "#3498db", 2,
    new google.maps.LatLng(46.924007, -2.411499),
    new google.maps.LatLng(47.368594, -3.026733),
    new google.maps.LatLng(47.698672, -3.823242),
    new google.maps.LatLng(47.706065, -4.416504),
    new google.maps.LatLng(48.400032, -5.004272),
    new google.maps.LatLng(48.817716, -4.130859),
    new google.maps.LatLng(49.063069,-3.131104),
    new google.maps.LatLng(49.507377,-2.136841),
    new google.maps.LatLng(49.84861,-1.873169), 
    new google.maps.LatLng(49.624946,-0.115356),
    new google.maps.LatLng(49.983020, 0.620728),
    new google.maps.LatLng(50.355976, 1.296387),
    new google.maps.LatLng(50.913424,1.428223), 
    new google.maps.LatLng(51.498485, 1.631470), 
    new google.maps.LatLng(51.5125, 0.0906) // Londinium
    ], 
    



//Red

    ['LAB099', 1, "#ff7f7f", 2,
    new google.maps.LatLng(51.044848, 6.948853),
    new google.maps.LatLng(50.992150, 6.782684),
    new google.maps.LatLng(51.016347, 6.733932),
    new google.maps.LatLng(51.040962, 6.677628),
    new google.maps.LatLng(51.481383, 5.844727),
    new google.maps.LatLng(51.648703, 4.36157),
    new google.maps.LatLng(51.967962,3.641968),
    new google.maps.LatLng(51.910391,3.224487),
    new google.maps.LatLng(51.828988, 3.499146),
    new google.maps.LatLng(51.675962, 2.735596),
    new google.maps.LatLng(51.406059, 2.290649),
    new google.maps.LatLng(51.454007, 2.1698),
    new google.maps.LatLng(51.272226, 1.884155),
    new google.maps.LatLng(51.299711, 1.631470),
    new google.maps.LatLng(51.128380, 1.322939)
    ],


	//Via XX 

	    ['viaXX', 1, "#1abc9c", 2,
	    new google.maps.LatLng(43.008664, -7.557220), //Lucus
	    new google.maps.LatLng(43.027741, -7.797546), //Friol
	    new google.maps.LatLng(43.032761, -8.022766), // Sobrado dos Monxes, Cohors Celtiberum Cidadela
	    new google.maps.LatLng(43.386195, -8.406510), // Brigantium
	    new google.maps.LatLng(43.209680, -8.688812), // Carballo, Atricondo
	    new google.maps.LatLng(43.095969, -8.914032), // Brandomil-Zas, Grandimiro
	    new google.maps.LatLng(42.790740, -8.885021), // Santa Cristina de Barro, Ad Duos Pontes
        new google.maps.LatLng(42.760625, -8.928452),
	    new google.maps.LatLng(42.733900, -8.964844),
	    new google.maps.LatLng(42.671329, -9.013596),
	    new google.maps.LatLng(42.608190, -9.001923), // Vicus Spacorum
	    new google.maps.LatLng(42.661736, -8.910599),
	    new google.maps.LatLng(42.704641, -8.794556),
	    new google.maps.LatLng(42.721290, -8.648987),
	    new google.maps.LatLng(42.602631, -8.640747) // Aquis Celenis (Caldas de Reis)
	    ],


		//Via XVIII Via Nova 

		    ['viaXVIII', 1, "#7f8c8d", 2,
		    new google.maps.LatLng(41.542506, -8.425140), //Bracara (Braga)
		    new google.maps.LatLng(41.650341, -8.283691), //Salaniana (Travassos)
		    new google.maps.LatLng(41.680625, -8.189702), // Aquis Originis (Baños de Riocaldo)
		    new google.maps.LatLng(42.032242, -7.973035), // Aquis Querquennis (Bande)
		    new google.maps.LatLng(42.249748, -7.525635), // Salientibus (Xinzo da Costa)
		    new google.maps.LatLng(42.317432, -7.327194), // Praesidio (Vilamaior) 
		    new google.maps.LatLng(42.338547, -7.249734), // Nemetobriga (Pobla de Trives)
	        new google.maps.LatLng(42.418018, -7.011639), // Foro (Pobra de Valdeorras)
		    new google.maps.LatLng(42.505082, -6.872965), // Gemestario (Portela de Aguiar)
		    new google.maps.LatLng(42.598666, -6.725914), // Bergido (Cacabelos)
		    new google.maps.LatLng(42.622778, -6.434444), // Intereraconio Flavio (San Román de Bembibre) 
		    new google.maps.LatLng(42.454930, -6.053251), // Asturica Augusta (Astorga)
		    new google.maps.LatLng(42.454930, -6.053251),
		    new google.maps.LatLng(42.454930, -6.053251),
		    new google.maps.LatLng(42.454930, -6.053251) // 
		    ],
			
			//Via XIX 

			    ['viaXIX', 1, "#d35400", 2,
			    new google.maps.LatLng(41.542506, -8.425140), // Bracara (Braga)
			    new google.maps.LatLng(41.774384, -8.562469), // Limia
			    new google.maps.LatLng(42.049155, -8.646610), // Tude (Tui)
			    new google.maps.LatLng(42.281852, -8.609170), // Burbida (Redondela)
			    new google.maps.LatLng(42.429885, -8.644620), // Turoqua (Pontevedra)
			    new google.maps.LatLng(42.602631, -8.640747), // Aquis Celenis (Caldas de Reis)		     
			    new google.maps.LatLng(42.745933, -8.655590), // Iria
		        new google.maps.LatLng(42.880556, -8.544745), // Asseconia
			    new google.maps.LatLng(42.913951, -8.014692), // Brevis (Melide)
			    new google.maps.LatLng(42.964463, -7.712402), // Marcie
			    new google.maps.LatLng(43.008664, -7.557220), // Lucus
			    new google.maps.LatLng(42.893904, -7.250424), // Timalino (Baralla)
			    new google.maps.LatLng(42.918331, -7.208915), // Ponte Naviae (Neira de Rei)
			    new google.maps.LatLng(42.656182, -6.902161), // Vitaris
			    new google.maps.LatLng(42.598666, -6.725914) // Bergido (Cacabelos)
			    ],
				
				//Via XIX 

				    ['viaXVII', 1, "#f1c40f", 2,
				    new google.maps.LatLng(41.542506, -8.425140), // Bracara (Braga)
				    new google.maps.LatLng(41.634322, -8.141620), // Salacia (Vieira do Minho)
				    new google.maps.LatLng(41.826630, -7.787870), // Praesidio (Montalegre)
				    new google.maps.LatLng(41.726230, -7.750854), // Caladunum
				    new google.maps.LatLng(41.741781, -7.473165), // Aquae Flaviae (Chaves)
				    new google.maps.LatLng(41.608716, -7.310906), // Pinetum (Valpaços)	     
				    new google.maps.LatLng(41.830723, -7.009300), // Roboretum (Vinhais)
			        new google.maps.LatLng(41.806113, -6.756738), // Compleutica (Bragança)
				    new google.maps.LatLng(41.868690, -6.441686), // Veniatia (Figueruela de Arriba)
				    new google.maps.LatLng(42.072218, -6.013660), // Petavonium (Santibañez de Vidriales)
				    new google.maps.LatLng(42.312569, -5.975957), // Argentiolum (Miñambres de la Valduerna)
				    new google.maps.LatLng(42.454930, -6.053251), // Asturica Augusta (Astorga)
				    new google.maps.LatLng(42.454930, -6.053251), // Asturica Augusta (Astorga)
				    new google.maps.LatLng(42.454930, -6.053251), // Asturica Augusta (Astorga)
				    new google.maps.LatLng(42.454930, -6.053251) // Asturica Augusta (Astorga)
				    ]
			
			





    ];

   
    

          
// Creating an object literal containing the properties we want to pass to the map 
          var mapOptions = {
          zoom: 7,
          center: hercules,
          mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.TERRAIN, MY_MAPTYPE_ID]
        },
        mapTypeId: MY_MAPTYPE_ID
        };   
          
          
// Calling the constructor, thereby initializing the map  
          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
          var styledMapOptions = { name: 'Roma' };
          var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);
          map.mapTypes.set(MY_MAPTYPE_ID, customMapType); 
















    var markers = [];         

    var i, newMarker;

    var polylines = [];         

    var p, newLine;

infowindow = new google.maps.InfoWindow();
    
//Strediska a sondy

    for (i = 0; i < sources.length; i++) {      
      newMarker = new google.maps.Marker({        
        position: new google.maps.LatLng(sources[i][1], sources[i][2]),        
        map: map,  
        shadow: sources[i][5],         
        icon: sources[i][4],
        info: sources[i][6],
        title: sources[i][0],
                clickable: true    
              
      });      

      newMarker.category = sources[i][3];      
      newMarker.setVisible(false);       
      
      markers.push(newMarker);  

        google.maps.event.addListener(newMarker, 'click', function() {     
        infowindow.setContent(this.info);    
        infowindow.open(map,this);   

       });
      
    }  

//Polylines

    for (p = 0; p < lines.length; p++) { 
        
      var path = [
          lines[p][4],
      lines[p][5],
      lines[p][6],
      lines[p][7],
      lines[p][8],
      lines[p][9],
      lines[p][10],
      lines[p][11],
      lines[p][12],
      lines[p][13],
      lines[p][14],
      lines[p][15],
      lines[p][16],
      lines[p][17],
      lines[p][18]
          ];
        
        var newLine = new google.maps.Polyline({        
            path: path,        
            strokeColor: lines[p][2],         
            strokeWeight: lines[p][3],
            strokeOpacity: 1.0,
            info: lines[p][0],
            map: map 
        });  

        newLine.setVisible(true);
        newLine.category = lines[p][1];
        polylines.push(path);
          
    }

function displayMarkers(category) {      
      
    var i;       

      for (i = 0; i < sources.length; i++) {        
        if (markers[i].category === category) { 
            if (markers[i].visible === true){
               markers[i].setVisible(false); }
            else {
               markers[i].setVisible(true);}         
                   
        }        
      }    
    }



   }