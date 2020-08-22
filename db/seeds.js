
use bird_spotter;
db.dropDatabase();

db.users.insertOne({
    username: "Test",
    password: "password"
})
db.sightings.insertOne({
    userID: "",
    birdID: "",
    date: "20/10/20",
})

db.birds.insertMany([
{name:"Brant goose",latin_name:"Branta bernicla",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Red-breasted goose",latin_name:"Branta ruficollis",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Canada goose",latin_name:"Branta canadensis",family:"Ducks, geese and swans",status:"A & C",comminality:"resident introduced population, some wild vagrants"},
{name:"Barnacle goose",latin_name:"Branta leucopsis",family:"Ducks, geese and swans",status:"A & C",comminality:"winter visitor and resident introduced population"},
{name:"Cackling goose",latin_name:"Branta hutchinsii",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Snow goose",latin_name:"Anser caerulescens",family:"Ducks, geese and swans",status:"A & C",comminality:"resident introduced population, some wild vagrants"},
{name:"Greylag goose",latin_name:"Anser anser",family:"Ducks, geese and swans",status:"A & C",comminality:"resident wild and feral populations, winter visitor"},
{name:"Taiga bean goose",latin_name:"Anser fabalis",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Pink-footed goose",latin_name:"Anser brachyrhynchus",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Tundra bean goose",latin_name:"Anser serrirostris",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Greater white-fronted goose",latin_name:"Anser albifrons",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Lesser white-fronted goose",latin_name:"Anser erythropus",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Mute swan",latin_name:"Cygnus olor",family:"Ducks, geese and swans",status:"A & C",comminality:"resident breeding species"},
{name:"Tundra swan",latin_name:"Cygnus columbianus",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Whooper swan",latin_name:"Cygnus cygnus",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor and occasional breeder"},
{name:"Egyptian goose",latin_name:"Alopochen aegyptiaca",family:"Ducks, geese and swans",status:"C",comminality:"resident introduced population"},
{name:"Ruddy shelduck",latin_name:"Tadorna ferruginea",family:"Ducks, geese and swans",status:"B",comminality:"Records since 1946 are presumed escapes from captivity"},
{name:"Common shelduck",latin_name:"Tadorna tadorna",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Mandarin duck",latin_name:"Aix galericulata",family:"Ducks, geese and swans",status:"C",comminality:"resident introduced population"},
{name:"Baikal teal",latin_name:"Sibirionetta formosa",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Garganey",latin_name:"Spatula querquedula",family:"Ducks, geese and swans",status:"A",comminality:"breeding summer visitor"},
{name:"Blue-winged teal",latin_name:"Spatula discors",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Northern shoveler",latin_name:"Spatula clypeata",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Gadwall",latin_name:"Mareca strepera",family:"Ducks, geese and swans",status:"A & C",comminality:"resident breeder and winter visitor"},
{name:"Falcated duck",latin_name:"Mareca falcata",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Eurasian wigeon",latin_name:"Mareca penelope",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"American wigeon",latin_name:"Mareca americana",family:"Ducks, geese and swans",status:"A",comminality:"scarce migrant"},
{name:"Mallard",latin_name:"Anas platyrhynchos",family:"Ducks, geese and swans",status:"A & C",comminality:"resident breeder, winter visitor and naturalised releases"},
{name:"American black duck",latin_name:"Anas rubripes",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Northern pintail",latin_name:"Anas acuta",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Common teal",latin_name:"Anas crecca",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Green-winged teal",latin_name:"Anas carolinensis",family:"Ducks, geese and swans",status:"A",comminality:"scarce migrant"},
{name:"Red-crested pochard",latin_name:"Netta rufina",family:"Ducks, geese and swans",status:"A & C",comminality:"scarce migrant and introduced breeder"},
{name:"Canvasback",latin_name:"Aythya valisineria",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Redhead (duck)",latin_name:"Aythya americana",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Common pochard",latin_name:"Aythya ferina",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Ferruginous duck",latin_name:"Aythya nyroca",family:"Ducks, geese and swans",status:"A",comminality:"scarce migrant"},
{name:"Ring-necked duck",latin_name:"Aythya collaris",family:"Ducks, geese and swans",status:"A",comminality:"scarce migrant"},
{name:"Tufted duck",latin_name:"Aythya fuligula",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Greater scaup",latin_name:"Aythya marila",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor and occasional breeder"},
{name:"Lesser scaup",latin_name:"Aythya affinis",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Steller's eider",latin_name:"Polysticta stelleri",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"King eider",latin_name:"Somateria spectabilis",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Common eider",latin_name:"Somateria mollissima",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Harlequin duck",latin_name:"Histrionicus histrionicus",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Surf scoter",latin_name:"Melanitta perspicillata",family:"Ducks, geese and swans",status:"A",comminality:"scarce migrant"},
{name:"Velvet scoter",latin_name:"Melanitta fusca",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"White-winged scoter",latin_name:"Melanitta deglandi",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Common scoter",latin_name:"Melanitta nigra",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Black scoter",latin_name:"Melanitta americana",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Long-tailed duck",latin_name:"Clangula hyemalis",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor and occasional breeder"},
{name:"Bufflehead",latin_name:"Bucephala albeola",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Common goldeneye",latin_name:"Bucephala clangula",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Barrow's goldeneye",latin_name:"Bucephala islandica",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Smew",latin_name:"Mergellus albellus",family:"Ducks, geese and swans",status:"A",comminality:"winter visitor"},
{name:"Hooded merganser",latin_name:"Lophodytes cucullatus",family:"Ducks, geese and swans",status:"A",comminality:"rare vagrant"},
{name:"Common merganser",latin_name:"Mergus merganser",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Red-breasted merganser",latin_name:"Mergus serrator",family:"Ducks, geese and swans",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Ruddy duck",latin_name:"Oxyura jamaicensis",family:"Ducks, geese and swans",status:"C",comminality:" introduced species currently subject to an eradication programme"},
{name:"Red grouse",latin_name:"Lagopus lagopus scotica",family:"Grouse",status:"A",comminality:"resident breeding species"},
{name:"Rock ptarmigan",latin_name:"Lagopus muta",family:"Grouse",status:"A",comminality:"resident breeding species"},
{name:"Black grouse",latin_name:"Tetrao tetrix",family:"Grouse",status:"A",comminality:"resident breeding species"},
{name:"Western capercaillie",latin_name:"Tetrao urogallus",family:"Grouse",status:"C",comminality:"resident reintroduced population"},
{name:"Red-legged partridge",latin_name:"Alectoris rufa",family:"Pheasants, partridges and quail",status:"C",comminality:"resident introduced population"},
{name:"Grey partridge",latin_name:"Perdix perdix",family:"Pheasants, partridges and quail",status:"A & C",comminality:"resident breeder and introduced gamebird"},
{name:"Common quail",latin_name:"Coturnix coturnix",family:"Pheasants, partridges and quail",status:"A",comminality:"breeding summer visitor"},
{name:"Common pheasant",latin_name:"Phasianus colchicus",family:"Pheasants, partridges and quail",status:"C",comminality:"resident introduced population"},
{name:"Golden pheasant",latin_name:"Chrysolophus pictus",family:"Pheasants, partridges and quail",status:"C",comminality:"resident introduced population"},
{name:"Lady Amherst's pheasant",latin_name:"Chrysolophus amherstiae",family:"Pheasants, partridges and quail",status:"C",comminality:"introduced population now extinct"},
{name:"Red-throated loon",latin_name:"Gavia stellata",family:"Divers",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Black-throated loon",latin_name:"Gavia arctica",family:"Divers",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Pacific loon",latin_name:"Gavia pacifica",family:"Divers",status:"A",comminality:"rare vagrant"},
{name:"Common loon",latin_name:"Gavia immer",family:"Divers",status:"A",comminality:"winter visitor, has bred"},
{name:"Yellow-billed loon",latin_name:"Gavia adamsii",family:"Divers",status:"A",comminality:"rare vagrant"},
{name:"Black-browed albatross",latin_name:"Thalassarche melanophris",family:"Albatrosses",status:"A",comminality:"rare vagrant"},
{name:"Atlantic yellow-nosed albatross",latin_name:"Thalassarche chlororhynchos",family:"Albatrosses",status:"A",comminality:"rare vagrant"},
{name:"Northern fulmar",latin_name:"Fulmarus glacialis",family:"Petrels",status:"A",comminality:"resident and migrant breeder, passage migrant"},
{name:"Black-capped petrel",latin_name:"Pterodroma hasitata",family:"Petrels",status:"B",comminality:"rare vagrant"},
{name:"Cory's shearwater",latin_name:"Calonectris borealis",family:"Petrels",status:"A",comminality:"scarce migrant"},
{name:"Scopoli's shearwater",latin_name:"Calonectris diomedea",family:"Petrels",status:"A",comminality:"rare vagrant"},
{name:"Great shearwater",latin_name:"Ardenna gravis",family:"Petrels",status:"A",comminality:"passage migrant"},
{name:"Sooty shearwater",latin_name:"Ardenna grisea",family:"Petrels",status:"A",comminality:"passage migrant"},
{name:"Manx shearwater",latin_name:"Puffinus puffinus",family:"Petrels",status:"A",comminality:"breeding summer visitor"},
{name:"Yelkouan shearwater",latin_name:"Puffinus yelkouan",family:"Petrels",status:"A",comminality:"rare vagrant"},
{name:"Balearic shearwater",latin_name:"Puffinus mauretanicus",family:"Petrels",status:"A",comminality:"passage migrant"},
{name:"Barolo shearwater",latin_name:"Puffinus baroli",family:"Petrels",status:"A",comminality:"rare vagrant"},
{name:"Wilson's storm petrel",latin_name:"Oceanites oceanicus",family:"Petrels",status:"A",comminality:"rare vagrant, more regularly seen well offshore"},
{name:"White-faced storm petrel",latin_name:"Pelagodroma marina",family:"Petrels",status:"A",comminality:"rare vagrant"},
{name:"European storm petrel",latin_name:"Hydrobates pelagicus",family:"Petrels",status:"A",comminality:"breeding summer visitor"},
{name:"Leach's storm petrel",latin_name:"Oceanodroma leucorhea",family:"Petrels",status:"A",comminality:"breeding summer visitor"},
{name:"Swinhoe's storm petrel",latin_name:"Oceanodroma monorhis",family:"Petrels",status:"A",comminality:"rare vagrant"},
{name:"Red-billed tropicbird",latin_name:"Phaethon aethereus",family:"Tropicbirds",status:"A",comminality:"rare vagrant"},
{name:"Northern gannet",latin_name:"Morus bassanus",family:"Gannets and boobies",status:"A",comminality:"breeding summer visitor and passage migrant"},
{name:"Red-footed booby",latin_name:"Sula sula",family:"Gannets and boobies",status:"A",comminality:"rare vagrant"},
{name:"Great cormorant",latin_name:"Phalacrocorax carbo",family:"Cormorants",status:"A",comminality:"resident breeding species"},
{name:"Double-crested cormorant",latin_name:"Phalacrocorax auritus",family:"Cormorants",status:"A",comminality:"rare vagrant"},
{name:"European shag",latin_name:"Phalacrocorax aristotelis",family:"Cormorants",status:"A",comminality:"resident breeding species"},
{name:"Magnificent frigatebird",latin_name:"Fregata magnificens",family:"Frigatebirds",status:"A",comminality:"rare vagrant"},
{name:"Ascension frigatebird",latin_name:"Fregata aquila",family:"Frigatebirds",status:"A",comminality:"rare vagrant"},
{name:"Dalmatian pelican",latin_name:"Pelecanus crispus",family:"Pelicans",status:"A",comminality:"very rare migrant"},
{name:"Great bittern",latin_name:"Botaurus stellaris",family:"Bitterns, herons and egrets",status:"A",comminality:"resident breeding species and winter migrant"},
{name:"American bittern",latin_name:"Botaurus lentiginosus",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Little bittern",latin_name:"Ixobrychus minutus",family:"Bitterns, herons and egrets",status:"A",comminality:"scarce migrant, recently bred"},
{name:"Black-crowned night heron",latin_name:"Nycticorax nycticorax",family:"Bitterns, herons and egrets",status:"A",comminality:"scarce migrant, has bred"},
{name:"Green heron",latin_name:"Butorides virescens",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Squacco heron",latin_name:"Ardeola ralloides",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Chinese pond heron",latin_name:"Ardeola bacchus",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Cattle egret",latin_name:"Bubulcus ibis",family:"Bitterns, herons and egrets",status:"A",comminality:"scarce but increasing resident, recently bred"},
{name:"Little egret",latin_name:"Egretta garzetta",family:"Bitterns, herons and egrets",status:"A",comminality:"resident breeding species and passage migrant"},
{name:"Snowy egret",latin_name:"Egretta thula",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Great egret",latin_name:"Ardea alba",family:"Bitterns, herons and egrets",status:"A",comminality:"resident breeding species, first bred 2012"},
{name:"Grey heron",latin_name:"Ardea cinerea",family:"Bitterns, herons and egrets",status:"A",comminality:"resident breeding species and winter migrant"},
{name:"Great blue heron",latin_name:"Ardea herodias",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Purple heron",latin_name:"Ardea purpurea",family:"Bitterns, herons and egrets",status:"A",comminality:"scarce migrant, recently bred"},
{name:"Glossy ibis",latin_name:"Plegadis falcinellus",family:"Bitterns, herons and egrets",status:"A",comminality:"rare vagrant"},
{name:"Common spoonbill",latin_name:"Platalea leucorodia",family:"Ibises and spoonbills",status:"A",comminality:"scarce migrant, recently bred"},
{name:"Black stork",latin_name:"Ciconia nigra",family:"Ibises and spoonbills",status:"A",comminality:"rare vagrant"},
{name:"White stork",latin_name:"Ciconia ciconia",family:"Storks",status:"A",comminality:"scarce migrant, formerly bred. Birds from an introduced population bred at "},
{name:"Knepp Castle",latin_name:"Podilymbus podiceps",family:"Storks",status:"A",comminality:"rare vagrant"},
{name:"Pied-billed grebe",latin_name:"Tachybaptus ruficollis",family:"Grebes",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Little grebe",latin_name:"Podiceps crsitatus",family:"Grebes",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Great crested grebe",latin_name:"Podiceps grisegena",family:"Grebes",status:"A",comminality:"winter visitor, has bred"},
{name:"Red-necked grebe",latin_name:"Podiceps auritus",family:"Grebes",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Horned grebe",latin_name:"Podiceps nigricollis",family:"Grebes",status:"A",comminality:"resident breeder and winter visitor"},
{name:"Black-necked grebe",latin_name:"Pernis apivorus",family:"Grebes",status:"A",comminality:"breeding summer visitor and passage migrant"},
{name:"European honey buzzard",latin_name:"Milvus migrans",family:"Buzzards, kites and allies",status:"A",comminality:"scarce migrant"},
{name:"Black kite",latin_name:"Milvus milvus",family:"Buzzards, kites and allies",status:"A & C",comminality:"resident breeder and widespread introductions"},
{name:"Red kite",latin_name:"Haliaeetus albicilla",family:"Buzzards, kites and allies",status:"A & C",comminality:"resident breeder and widespread introductions"},
{name:"White-tailed eagle",latin_name:"Neophron percnopterus",family:"Buzzards, kites and allies",status:"B",comminality:"rare vagrant"},
{name:"Egyptian vulture",latin_name:"Circaetus gallicus",family:"Buzzards, kites and allies",status:"A",comminality:"rare vagrant"},
{name:"Short-toed snake eagle",latin_name:"Circus aeruginosus",family:"Buzzards, kites and allies",status:"A",comminality:"resident breeder and passage migrant"},
{name:"Western marsh harrier",latin_name:"Circus cyaneus",family:"Buzzards, kites and allies",status:"A",comminality:"resident breeder, winter visitor and passage migrant"},
{name:"Hen harrier",latin_name:"Circus macrourus",family:"Buzzards, kites and allies",status:"A",comminality:"rare vagrant"},
{name:"Pallid harrier",latin_name:"Circus pygargus",family:"Buzzards, kites and allies",status:"A",comminality:"breeding summer visitor and passage migrant"},
{name:"Montagu's harrier",latin_name:"Accipiter gentilis",family:"Buzzards, kites and allies",status:"A & C",comminality:"resident breeder and naturalised escapes"},
{name:"Northern goshawk",latin_name:"Accipiter nisus",family:"Buzzards, kites and allies",status:"A",comminality:"resident breeder and passage migrant"},
{name:"Eurasian sparrowhawk",latin_name:"Buteo buteo",family:"Buzzards, kites and allies",status:"A",comminality:"resident breeder and passage migrant"},
{name:"Common buzzard",latin_name:"Buteo lagopus",family:"Buzzards, kites and allies",status:"A",comminality:"winter visitor"},
{name:"Rough-legged buzzard",latin_name:"Clanga clanga",family:"Buzzards, kites and allies",status:"B",comminality:"rare vagrant"},
{name:"Greater spotted eagle",latin_name:"Aquila chrysaetos",family:"Buzzards, kites and allies",status:"A",comminality:"resident breeding species"},
{name:"Golden eagle",latin_name:"Pandion haliaetus",family:"Buzzards, kites and allies",status:"A",comminality:"breeding summer visitor"},
{name:"Osprey",latin_name:"Falco naumanni",family:"Osprey",status:"A",comminality:"rare vagrant"},
{name:"Lesser kestrel",latin_name:"Falco tinnunculus",family:"Falcons",status:"A",comminality:"resident breeding species"},
{name:"Common kestrel",latin_name:"Falco sparverius",family:"Falcons",status:"A",comminality:"rare vagrant"},
{name:"American kestrel",latin_name:"Falco vespertinus",family:"Falcons",status:"A",comminality:"scarce migrant"},
{name:"Red-footed falcon",latin_name:"Falco amurensis",family:"Falcons",status:"A",comminality:"rare vagrant"},
{name:"Amur falcon",latin_name:"Falco columbarius",family:"Falcons",status:"A",comminality:"resident breeding species"},
{name:"Merlin (bird)",latin_name:"Falco subbuteo",family:"Falcons",status:"A",comminality:"breeding summer visitor"},
{name:"Eurasian hobby",latin_name:"Falco eleonorae",family:"Falcons",status:"A",comminality:"rare vagrant"},
{name:"Eleonora's falcon",latin_name:"Falco rusticolus",family:"Falcons",status:"A",comminality:"rare vagrant"},
{name:"Gyr falcon",latin_name:"Falco peregrinus",family:"Falcons",status:"A",comminality:"resident breeding species"},
{name:"Peregrine falcon",latin_name:"Rallus aquaticus",family:"Falcons",status:"A",comminality:"resident breeding species"},
{name:"Water rail",latin_name:"Porzana porzana",family:"Rails, crakes and coots",status:"A",comminality:"scarce breeding summer visitor"},
{name:"Spotted crake",latin_name:"Porzana carolina",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant"},
{name:"Sora (bird)",latin_name:"Porzana parva",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant"},
{name:"Little crake",latin_name:"Porzana pusilla",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant, formerly bred"},
{name:"Baillon's crake",latin_name:"Crex crex",family:"Rails, crakes and coots",status:"A",comminality:"breeding summer visitor"},
{name:"Corn crake",latin_name:"Gallinula chloropus",family:"Rails, crakes and coots",status:"A",comminality:"resident breeding species"},
{name:"Common moorhen",latin_name:"Porphyrio porphyrio",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant, first recorded in 2016."},
{name:"Western swamphen",latin_name:"Porphyrio alleni",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant"},
{name:"Allen's gallinule",latin_name:"Porphyrio martinicus",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant"},
{name:"American purple gallinule",latin_name:"Fulica atra",family:"Rails, crakes and coots",status:"A",comminality:"resident breeding species"},
{name:"Eurasian coot",latin_name:"Fulica americana",family:"Rails, crakes and coots",status:"A",comminality:"rare vagrant"},
{name:"American coot",latin_name:"Grus grus",family:"Rails, crakes and coots",status:"A",comminality:"resident breeding species and passage migrant"},
{name:"Common crane",latin_name:"Grus canadensis",family:"Cranes",status:"A",comminality:"rare vagrant"},
{name:"Sandhill crane",latin_name:"Tetrax tetrax",family:"Cranes",status:"A",comminality:"rare vagrant"},
{name:"Little bustard",latin_name:"Chlamydotis macqueenii",family:"Bustards",status:"B",comminality:"rare vagrant"},
{name:"Macqueen's bustard",latin_name:"Otis tarda",family:"Bustards",status:"A",comminality:"rare vagrant and recently reintroduced breeding resident species"},
{name:"Great bustard",latin_name:"Haematopus ostralegus",family:"Bustards",status:"A",comminality:"resident breeding species"},
{name:"Eurasian oystercatcher",latin_name:"Himantopus himantopus",family:"Oystercatchers",status:"A",comminality:"rare vagrant and occasional breeder"},
{name:"Black-winged stilt",latin_name:"Recurvirostra avosetta",family:"Avocets and stilts",status:"A",comminality:"resident breeding species"},
{name:"Pied avocet",latin_name:"Burhinus oedicnemus",family:"Avocets and stilts",status:"A",comminality:"breeding summer visitor"},
{name:"Eurasian stone-curlew",latin_name:"Cursorius cursor",family:"Thick-knees",status:"A",comminality:"rare vagrant"},
{name:"Cream-colored courser",latin_name:"Glareola pratincola",family:"Pratincoles and coursers",status:"A",comminality:"rare vagrant"},
{name:"Collared pratincole",latin_name:"Glareola maldivarum",family:"Pratincoles and coursers",status:"A",comminality:"rare vagrant"},
{name:"Oriental pratincole",latin_name:"Glareola nordmanni",family:"Pratincoles and coursers",status:"A",comminality:"rare vagrant"},
{name:"Black-winged pratincole",latin_name:"Charadrius dubius",family:"Pratincoles and coursers",status:"A",comminality:"breeding summer visitor"},
{name:"Little ringed plover",latin_name:"Charadrius hiaticula",family:"Plovers and lapwings",status:"A",comminality:"resident breeding species and summer visitor"},
{name:"Ringed plover",latin_name:"Charadrius semipalmatus",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Semipalmated plover",latin_name:"Charadrius vociferus",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Killdeer",latin_name:"Charadrius alexandrinus",family:"Plovers and lapwings",status:"A",comminality:"former breeder, now a rare vagrant."},
{name:"Kentish plover",latin_name:"Charadrius mongolus",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Lesser sand plover",latin_name:"Charadrius leschenaultii",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Greater sand plover",latin_name:"Charadrius asiaticus",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Caspian plover",latin_name:"Charadrius morinellus",family:"Plovers and lapwings",status:"A",comminality:"breeding summer visitor"},
{name:"Eurasian dotterel",latin_name:"Pluvialis dominica",family:"Plovers and lapwings",status:"A",comminality:"scarce migrant"},
{name:"American golden plover",latin_name:"Pluvialis fulva",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Pacific golden plover",latin_name:"Pluvialis apricaria",family:"Plovers and lapwings",status:"A",comminality:"winter visitor and passage migrant, scarce breeder"},
{name:"European golden plover",latin_name:"Pluvialis squatarola",family:"Plovers and lapwings",status:"A",comminality:"winter visitor and passage migrant"},
{name:"Grey plover",latin_name:"Vanellus gregarius",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Sociable lapwing",latin_name:"Vanellus leucurus",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"White-tailed lapwing",latin_name:"Vanellus vanellus",family:"Plovers and lapwings",status:"A",comminality:"resident breeding species"},
{name:"Northern lapwing",latin_name:"Calidris tenuirostris",family:"Plovers and lapwings",status:"A",comminality:"rare vagrant"},
{name:"Great knot",latin_name:"Calidris canutus",family:"Sandpipers and allies",status:"A",comminality:"winter visitor and passage migrant"},
{name:"Red knot",latin_name:"Calidris alba",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant"},
{name:"Sanderling",latin_name:"Calidris pusilla",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Semipalmated sandpiper",latin_name:"Calidris mauri",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Western sandpiper",latin_name:"Calidris ruficollis",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Red-necked stint",latin_name:"Calidris minuta",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant"},
{name:"Little stint",latin_name:"Calidris temminckii",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant, occasional breeder"},
{name:"Temminck's stint",latin_name:"Calidris subminuta",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Long-toed stint",latin_name:"Calidris minutilla",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Least sandpiper",latin_name:"Calidris fuscicollis",family:"Sandpipers and allies",status:"A",comminality:"scarce migrant"},
{name:"White-rumped sandpiper",latin_name:"Calidris bairdii",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Baird's sandpiper",latin_name:"Calidris melanotos",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant"},
{name:"Pectoral sandpiper",latin_name:"Calidris acuminata",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Sharp-tailed sandpiper",latin_name:"Calidris ferruginea",family:"Sandpipers and allies",status:"A",comminality:"winter visitor and passage migrant"},
{name:"Curlew sandpiper",latin_name:"Calidris himantopus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Stilt sandpiper",latin_name:"Calidris maritima",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant, occasional breeder"},
{name:"Purple sandpiper",latin_name:"Calidris alpina",family:"Sandpipers and allies",status:"A",comminality:"winter visitor and passage migrant, scarce breeder"},
{name:"Dunlin",latin_name:"Calidris falcinellus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Broad-billed sandpiper",latin_name:"Calidris subruficollis",family:"Sandpipers and allies",status:"A",comminality:"passage migrant"},
{name:"Buff-breasted sandpiper",latin_name:"Calidris pugnax",family:"Sandpipers and allies",status:"A",comminality:"passage migrant and scarce breeding resident"},
{name:"Ruff (bird)",latin_name:"Lymnocryptes minimus",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant"},
{name:"Jack snipe",latin_name:"Gallinago gallinago",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species and summer visitor"},
{name:"Common snipe",latin_name:"Gallinago delicata",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Wilson's snipe",latin_name:"Gallinago media",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Great snipe",latin_name:"Limnodromus griseus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Short-billed dowitcher",latin_name:"Limnodromus scolopaceus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Long-billed dowitcher",latin_name:"Scolopax rusticola",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species"},
{name:"Eurasian woodcock",latin_name:"Limosa limosa",family:"Sandpipers and allies",status:"A",comminality:"winter visitor, passage migrant and scarce summer breeding species"},
{name:"Black-tailed godwit",latin_name:"Limosa haemastica",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Hudsonian godwit",latin_name:"Limosa lapponica",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant"},
{name:"Bar-tailed godwit",latin_name:"Numenius minutus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Little curlew",latin_name:"Numenius borealis",family:"Sandpipers and allies",status:"B",comminality:"(extinct)"},
{name:"Eskimo curlew",latin_name:"Numenius hudsonicus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Hudsonian whimbrel",latin_name:"Numenius phaeopus",family:"Sandpipers and allies",status:"A",comminality:"breeding summer visitor"},
{name:"Eurasian whimbrel",latin_name:"Numenius arquata",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species"},
{name:"Eurasian curlew",latin_name:"Bartramia longicauda",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Upland sandpiper",latin_name:"Xenus cinereus",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Terek sandpiper",latin_name:"Actitis hypoleucos",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species and passage migrant"},
{name:"Common sandpiper",latin_name:"Actitis macularius",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Spotted sandpiper",latin_name:"Tringa ochropus",family:"Sandpipers and allies",status:"A",comminality:"winter visitor & passage migrant, occasional breeder"},
{name:"Green sandpiper",latin_name:"Tringa solitaria",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Solitary sandpiper",latin_name:"Tringa brevipes",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Grey-tailed tattler",latin_name:"Tringa erythropus",family:"Sandpipers and allies",status:"A",comminality:"winter visitor and passage migrant"},
{name:"Spotted redshank",latin_name:"Tringa melanoleuca",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Greater yellowlegs",latin_name:"Tringa nebularia",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species and passage migrant"},
{name:"Common greenshank",latin_name:"Tringa flavipes",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Lesser yellowlegs",latin_name:"Tringa stagnatilis",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Marsh sandpiper",latin_name:"Tringa glareola",family:"Sandpipers and allies",status:"A",comminality:"passage migrant & rare localised breeder in far North"},
{name:"Wood sandpiper",latin_name:"Tringa totanus",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species"},
{name:"Common redshank",latin_name:"Arenaria interpres",family:"Sandpipers and allies",status:"A",comminality:"resident breeding species"},
{name:"Ruddy turnstone",latin_name:"Phalaropus tricolor",family:"Sandpipers and allies",status:"A",comminality:"rare vagrant"},
{name:"Wilson's phalarope",latin_name:"Phalaropus lobatus",family:"Sandpipers and allies",status:"A",comminality:"winter visitor: scarce & localised summer breeding in far North"},
{name:"Red-necked phalarope",latin_name:"Phalaropus fulicaria",family:"Sandpipers and allies",status:"A",comminality:"scarce winter visitor"},
{name:"Grey phalarope",latin_name:"Stercorarius pomarinus",family:"Sandpipers and allies",status:"A",comminality:"passage migrant"},
{name:"Pomarine skua",latin_name:"Stercorarius parasiticus",family:"Skuas",status:"A",comminality:"passage migrant and localised summer breeder"},
{name:"Arctic skua",latin_name:"Stercorarius longicaudus",family:"Skuas",status:"A",comminality:"passage migrant"},
{name:"Long-tailed skua",latin_name:"Stercorarius skua",family:"Skuas",status:"A",comminality:"passage migrant and localised summer breeder"},
{name:"Great skua",latin_name:"Pagophila eburnea",family:"Skuas",status:"A",comminality:"rare vagrant"},
{name:"Ivory gull",latin_name:"Xema sabini",family:"Gulls, terns, and skimmers",status:"A",comminality:"scarce winter visitor"},
{name:"Sabine's gull",latin_name:"Rissa tridactyla",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor and resident species"},
{name:"Black-legged kittiwake",latin_name:"Chroicocephalus genei",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Slender-billed gull",latin_name:"Chroicocephalus philadelphia",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Bonaparte's gull",latin_name:"Chroicocephalus ridibundus",family:"Gulls, terns, and skimmers",status:"A",comminality:"resident breeding species"},
{name:"Black-headed gull",latin_name:"Hydrocoloeus minutus",family:"Gulls, terns, and skimmers",status:"A",comminality:"winter visitor, occasional breeder"},
{name:"Little gull",latin_name:"Rhodostethia rosea",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Ross's gull",latin_name:"Leucophaeus atricilla",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Laughing gull",latin_name:"Leucophaeus pipixcan",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Franklin's gull",latin_name:"Ichthyaetus melanocephalus",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor, & resident in south."},
{name:"Mediterranean gull",latin_name:"Ichthyaetus audouinii",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Audouin's gull",latin_name:"Ichthyaetus ichthyaetus",family:"Gulls, terns, and skimmers",status:"B",comminality:"rare vagrant"},
{name:"Pallas's gull",latin_name:"Larus canus",family:"Gulls, terns, and skimmers",status:"A",comminality:"resident breeding species, winter visitor & passage migrant"},
{name:"Common gull",latin_name:"Larus delawarensis",family:"Gulls, terns, and skimmers",status:"A",comminality:"scarce winter visitor & passage migrant"},
{name:"Ring-billed gull",latin_name:"Larus fuscus",family:"Gulls, terns, and skimmers",status:"A",comminality:"resident breeding species and passage migrant"},
{name:"Lesser black-backed gull",latin_name:"Larus argentatus",family:"Gulls, terns, and skimmers",status:"A",comminality:"resident breeding species"},
{name:"European herring gull",latin_name:"Larus michahellis",family:"Gulls, terns, and skimmers",status:"A",comminality:"non-breeding late-summer visitor and passage migrant, has bred"},
{name:"Yellow-legged gull",latin_name:"Larus cachinnans",family:"Gulls, terns, and skimmers",status:"A",comminality:"scarce migrant"},
{name:"Caspian gull",latin_name:"Larus smithsonianus",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"American herring gull",latin_name:"Larus glaucoides",family:"Gulls, terns, and skimmers",status:"A",comminality:"scarce winter visitor"},
{name:"Iceland gull",latin_name:"Larus schistisagus",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Slaty-backed gull",latin_name:"Larus glaucescens",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Glaucous-winged gull",latin_name:"Larus hyperboreus",family:"Gulls, terns, and skimmers",status:"A",comminality:"winter visitor, has bred"},
{name:"Glaucous gull",latin_name:"Larus marinus",family:"Gulls, terns, and skimmers",status:"A",comminality:"resident breeding species and passage migrant"},
{name:"Great black-backed gull",latin_name:"Onychoprion aleutica",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Aleutian tern",latin_name:"Onychoprion fuscata",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Sooty tern",latin_name:"Onychoprion anaethetus",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Bridled tern",latin_name:"Sternula albifrons",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor"},
{name:"Little tern",latin_name:"Gelochelidon nilotica",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant, has bred"},
{name:"Gull-billed tern",latin_name:"Hydroprogne caspia",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Caspian tern",latin_name:"Chlidonias hybridus",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Whiskered tern",latin_name:"Chlidonias niger",family:"Gulls, terns, and skimmers",status:"A",comminality:"passage migrant, occasional breeder"},
{name:"Black tern",latin_name:"Chlidonias leucopterus",family:"Gulls, terns, and skimmers",status:"A",comminality:"scarce migrant"},
{name:"White-winged tern",latin_name:"Thalasseus acuflavida",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Cabot's tern",latin_name:"Thalasseus elegans",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Elegant tern",latin_name:"Thalasseus sandvicensis",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor"},
{name:"Sandwich tern",latin_name:"Thalasseus maximus",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Royal tern",latin_name:"Thalasseus bengalensis",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Lesser crested tern",latin_name:"Sterna forsteri",family:"Gulls, terns, and skimmers",status:"A",comminality:"rare vagrant"},
{name:"Forster's tern",latin_name:"Sterna hirundo",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor"},
{name:"Common tern",latin_name:"Sterna dougallii",family:"Gulls, terns, and skimmers",status:"A",comminality:"scarce breeding summer visitor"},
{name:"Roseate tern",latin_name:"Sterna paradisaea",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor"},
{name:"Arctic tern",latin_name:"Uria aalge",family:"Gulls, terns, and skimmers",status:"A",comminality:"breeding summer visitor and resident species"},
{name:"Common guillemot",latin_name:"Uria lomvia",family:"Auks",status:"A",comminality:"rare vagrant"},
{name:"Brunnich's guillemot",latin_name:"Alca torda",family:"Auks",status:"A",comminality:"breeding summer visitor and resident species"},
{name:"Razorbill",latin_name:"Pinguinus impennis",family:"Auks",status:"B",comminality:"(extinct)"},
{name:"Great auk",latin_name:"Cepphus grylle",family:"Auks",status:"A",comminality:"resident localised breeding species"},
{name:"Black guillemot",latin_name:"Brachyramphus perdix",family:"Auks",status:"A",comminality:"rare vagrant"},
{name:"Long-billed murrelet",latin_name:"Synthliboramphus antiquus",family:"Auks",status:"A",comminality:"rare vagrant"},
{name:"Ancient murrelet",latin_name:"Alle alle",family:"Auks",status:"A",comminality:"rare winter visitor"},
{name:"Little auk",latin_name:"Fratercula arctica",family:"Auks",status:"A",comminality:"breeding summer visitor"},
{name:"Atlantic puffin",latin_name:"Fratercula cirrhata",family:"Auks",status:"A",comminality:"rare vagrant"},
{name:"Tufted puffin",latin_name:"Syrrhaptes paradoxus",family:"Auks",status:"A",comminality:"rare vagrant, has bred"},
{name:"Pallas's sandgrouse",latin_name:"Columba livia",family:"Sandgrouse",status:"A & C",comminality:"Resident, most birds are of feral origin"},
{name:"Rock dove",latin_name:"Columba oenas",family:"Pigeons and doves",status:"A",comminality:"resident breeding species"},
{name:"Stock dove",latin_name:"Columba palumbus",family:"Pigeons and doves",status:"A",comminality:"resident breeding species"},
{name:"Common wood pigeon",latin_name:"Streptopelia decaocto",family:"Pigeons and doves",status:"A",comminality:"resident breeding species"},
{name:"Eurasian collared dove",latin_name:"Streptopelia turtur",family:"Pigeons and doves",status:"A",comminality:"breeding summer visitor"},
{name:"European turtle dove",latin_name:"Streptopelia orientalis",family:"Pigeons and doves",status:"A",comminality:"rare vagrant"},
{name:"Oriental turtle dove",latin_name:"Zenaida macroura",family:"Pigeons and doves",status:"A",comminality:"rare vagrant"},
{name:"Mourning dove",latin_name:"Psittacula krameri",family:"Pigeons and doves",status:"C",comminality:"resident introduced population"},
{name:"Rose-ringed parakeet",latin_name:"Clamator glandarius",family:"Parrots",status:"A",comminality:"rare vagrant"},
{name:"Great spotted cuckoo",latin_name:"Cuculus canorus",family:"Cuckoos",status:"A",comminality:"breeding summer visitor"},
{name:"Common cuckoo",latin_name:"Coccyzus erythropthalmus",family:"Cuckoos",status:"A",comminality:"rare vagrant"},
{name:"Black-billed cuckoo",latin_name:"Coccyzus americanus",family:"Cuckoos",status:"A",comminality:"rare vagrant"},
{name:"Yellow-billed cuckoo",latin_name:"Tyto alba",family:"Cuckoos",status:"A",comminality:"resident breeding species"},
{name:"Barn owl",latin_name:"Otus scops",family:"Owls",status:"A",comminality:"rare vagrant"},
{name:"Eurasian scops owl",latin_name:"Bubo scandiacus",family:"Owls",status:"A",comminality:"rare vagrant, has bred Shetland Islands"},
{name:"Snowy owl",latin_name:"Surnia ulula",family:"Owls",status:"A",comminality:"rare vagrant"},
{name:"Northern hawk-owl",latin_name:"Athene noctua",family:"Owls",status:"C",comminality:"resident introduced population"},
{name:"Little owl",latin_name:"Strix aluco",family:"Owls",status:"A",comminality:"resident breeding species"},
{name:"Tawny owl",latin_name:"Asio otus",family:"Owls",status:"A",comminality:"scarce resident breeding species"},
{name:"Long-eared owl",latin_name:"Asio flammeus",family:"Owls",status:"A",comminality:"resident breeding species or winter visitor"},
{name:"Short-eared owl",latin_name:"Aegolius funereus",family:"Owls",status:"A",comminality:"rare vagrant"},
{name:"Tengmalm's owl",latin_name:"Caprimulgus europaeus",family:"Owls",status:"A",comminality:"breeding summer visitor"},
{name:"European nightjar",latin_name:"Caprimulgus ruficollis",family:"Nightjars",status:"A",comminality:"rare vagrant"},
{name:"Red-necked nightjar",latin_name:"Caprimulgus aegyptius",family:"Nightjars",status:"A",comminality:"rare vagrant"},
{name:"Egyptian nightjar",latin_name:"Chordeiles minor",family:"Nightjars",status:"A",comminality:"rare vagrant"},
{name:"Common nighthawk",latin_name:"Chaetura pelagica",family:"Nightjars",status:"A",comminality:"rare vagrant"},
{name:"Chimney swift",latin_name:"Hirundapus caudacutus",family:"Swifts",status:"A",comminality:"rare vagrant"},
{name:"White-throated needletail",latin_name:"Apus apus",family:"Swifts",status:"A",comminality:"breeding summer visitor"},
{name:"Common swift",latin_name:"Apus pallidus",family:"Swifts",status:"A",comminality:"rare vagrant"},
{name:"Pallid swift",latin_name:"Apus pacificus",family:"Swifts",status:"A",comminality:"rare vagrant"},
{name:"Pacific swift",latin_name:"Apus melba",family:"Swifts",status:"A",comminality:"scarce migrant"},
{name:"Alpine swift",latin_name:"Apus affinis",family:"Swifts",status:"A",comminality:"rare vagrant"},
{name:"Little swift",latin_name:"Apus caffer",family:"Swifts",status:"A",comminality:"rare vagrant"},
{name:"White-rumped swift",latin_name:"Alcedo atthis",family:"Swifts",status:"A",comminality:"resident breeding species"},
{name:"Common kingfisher",latin_name:"Megaceryle alcyon",family:"Kingfishers",status:"A",comminality:"rare vagrant"},
{name:"Belted kingfisher",latin_name:"Merops persicus",family:"Kingfishers",status:"A",comminality:"rare vagrant"},
{name:"Blue-cheeked bee-eater",latin_name:"Merops apiaster",family:"Bee-eaters",status:"A",comminality:"scarce summer visitor - occasional breeder"},
{name:"European bee-eater",latin_name:"Coracias garrulus",family:"Bee-eaters",status:"A",comminality:"rare vagrant"},
{name:"European roller",latin_name:"Upupa epops",family:"Rollers",status:"A",comminality:"scarce summer visitor, occasional breeder"},
{name:"Hoopoe",latin_name:"Jynx torquilla",family:"Hoopoe",status:"A",comminality:"rare passage migrant, occasional breeder"},
{name:"Eurasian wryneck",latin_name:"Picus viridis",family:"Woodpeckers",status:"A",comminality:"resident breeding species"},
{name:"European green woodpecker",latin_name:"Sphyrapicus varius",family:"Woodpeckers",status:"A",comminality:"rare vagrant"},
{name:"Yellow-bellied sapsucker",latin_name:"Dendrocopos major",family:"Woodpeckers",status:"A",comminality:"resident breeding species"},
{name:"Great spotted woodpecker",latin_name:"Dryobates minor",family:"Woodpeckers",status:"A",comminality:"resident breeding species"},
{name:"Lesser spotted woodpecker",latin_name:"Sayornis phoebe",family:"Woodpeckers",status:"A",comminality:"rare vagrant"},
{name:"Eastern phoebe",latin_name:"Empidonax virescens",family:"Tyrant flycatchers",status:"A",comminality:"rare vagrant"},
{name:"Acadian flycatcher",latin_name:"Empidonax alnorum",family:"Tyrant flycatchers",status:"A",comminality:"rare vagrant"},
{name:"Alder flycatcher",latin_name:"Tyrannus tyrannus",family:"Tyrant flycatchers",status:"A",comminality:"rare vagrant"},
{name:"Eastern kingbird",latin_name:"Oriolus oriolus",family:"Tyrant flycatchers",status:"A",comminality:"scarce breeding summer visitor"},
{name:"Eurasian golden oriole",latin_name:"Lanius cristatus",family:"Old World orioles",status:"A",comminality:"rare vagrant"},
{name:"Brown shrike",latin_name:"Lanius collurio",family:"Shrikes",status:"A",comminality:"scarce passage migrant, occasional breeder"},
{name:"Red-backed shrike",latin_name:"Lanius isabellinus",family:"Shrikes",status:"A",comminality:"rare vagrant"},
{name:"Daurian shrike",latin_name:"Lanius phoenicuroides",family:"Shrikes",status:"A",comminality:"rare vagrant"},
{name:"Turkestan shrike",latin_name:"Lanius schach",family:"Shrikes",status:"A",comminality:"rare vagrant"},
{name:"Long-tailed shrike",latin_name:"Lanius minor",family:"Shrikes",status:"A",comminality:"rare vagrant"},
{name:"Lesser grey shrike",latin_name:"Lanius excubitor",family:"Shrikes",status:"A",comminality:"scarce winter visitor"},
{name:"Great grey shrike",latin_name:"Lanius senator",family:"Shrikes",status:"A",comminality:"scarce migrant"},
{name:"Woodchat shrike",latin_name:"Lanius nubicus",family:"Shrikes",status:"A",comminality:"rare vagrant"},
{name:"Masked shrike",latin_name:"Vireo flavifrons",family:"Shrikes",status:"A",comminality:"rare vagrant"},
{name:"Yellow-throated vireo",latin_name:"Vireo philadelphicus",family:"Vireos",status:"A",comminality:"rare vagrant"},
{name:"Philadelphia vireo",latin_name:"Vireo olivaceus",family:"Vireos",status:"A",comminality:"rare vagrant"},
{name:"Red-eyed vireo",latin_name:"Pyrrhocorax pyrrhocorax",family:"Vireos",status:"A",comminality:"resident breeding species"},
{name:"Red-billed chough",latin_name:"Pica pica",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Eurasian magpie",latin_name:"Garrulus glandarius",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Eurasian jay",latin_name:"Nucifraga caryocatactes",family:"Crows and allies",status:"A",comminality:"rare vagrant"},
{name:"Spotted nutcracker",latin_name:"Coloeus monedula",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Jackdaw",latin_name:"Corvus frugilegus",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Rook (bird)",latin_name:"Corvus corone",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Carrion crow",latin_name:"Corvus cornix",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Hooded crow",latin_name:"Corvus corax",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Common raven",latin_name:"Regulus regulus",family:"Crows and allies",status:"A",comminality:"resident breeding species"},
{name:"Goldcrest",latin_name:"Regulus ignicapillus",family:"Kinglets",status:"A",comminality:"scarce resident breeding species and passage migrant"},
{name:"Common firecrest",latin_name:"Remiz pendulinus",family:"Kinglets",status:"A",comminality:"rare vagrant"},
{name:"European penduline tit",latin_name:"Cyanistes caeruleus",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Eurasian blue tit",latin_name:"Parus major",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Great tit",latin_name:"Lophophanes cristatus",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Crested tit",latin_name:"Periparus ater",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Coal tit",latin_name:"Poecile montana",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Willow tit",latin_name:"Poecile palustris",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Marsh tit",latin_name:"Panurus biarmicus",family:"Tits",status:"A",comminality:"resident breeding species"},
{name:"Bearded tit",latin_name:"Melanocorypha calandra",family:"Tits",status:"A",comminality:"rare vagrant"},
{name:"Calandra lark",latin_name:"Melanocorypha bimaculata",family:"Larks",status:"A",comminality:"rare vagrant"},
{name:"Bimaculated lark",latin_name:"Melanocorypha yeltoniensis",family:"Larks",status:"A",comminality:"rare vagrant"},
{name:"Black lark",latin_name:"Calandrella brachydactyla",family:"Larks",status:"A",comminality:"scarce migrant"},
{name:"Greater short-toed lark",latin_name:"Alaudala rufescens",family:"Larks",status:"A",comminality:"rare vagrant"},
{name:"Lesser short-toed lark",latin_name:"Galerida cristata",family:"Larks",status:"A",comminality:"rare vagrant"},
{name:"Crested lark",latin_name:"Lullula arborea",family:"Larks",status:"A",comminality:"scarce resident breeding species and summer migrant"},
{name:"Woodlark",latin_name:"Alauda arvensis",family:"Larks",status:"A",comminality:"resident breeding species"},
{name:"Eurasian skylark",latin_name:"Alauda leucoptera",family:"Larks",status:"A",comminality:"rare vagrant"},
{name:"White-winged lark",latin_name:"Eremophila alpestris",family:"Larks",status:"A",comminality:"scarce winter visitor and passage migrant, occasional breeder"},
{name:"Shore lark",latin_name:"Riparia riparia",family:"Larks",status:"A",comminality:"breeding summer visitor"},
{name:"Sand martin",latin_name:"Tachycineta bicolor",family:"Swallows and martins",status:"A",comminality:"rare vagrant"},
{name:"Tree swallow",latin_name:"Progne subis",family:"Swallows and martins",status:"A",comminality:"rare vagrant"},
{name:"Purple martin",latin_name:"Ptyonoprogne rupestris",family:"Swallows and martins",status:"A",comminality:"rare vagrant"},
{name:"Eurasian crag martin",latin_name:"Hirundo rustica",family:"Swallows and martins",status:"A",comminality:"breeding summer visitor"},
{name:"Barn swallow",latin_name:"Delichon urbicum",family:"Swallows and martins",status:"A",comminality:"breeding summer visitor"},
{name:"Common house martin",latin_name:"Cecropis daurica",family:"Swallows and martins",status:"A",comminality:"scarce migrant"},
{name:"Red-rumped swallow",latin_name:"Petrochelidon pyrrhonota",family:"Swallows and martins",status:"A",comminality:"rare vagrant"},
{name:"American cliff swallow",latin_name:"Cettia cetti",family:"Swallows and martins",status:"A",comminality:"resident breeding species"},
{name:"Cetti's warbler",latin_name:"Aegithalos caudatus",family:"Bush warblers",status:"A",comminality:"resident breeding species"},
{name:"Long-tailed tit",latin_name:"Phylloscopus coronatus",family:"Tits",status:"A",comminality:"rare vagrant"},
{name:"Eastern crowned warbler",latin_name:"Phylloscopus nitidus",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Green warbler",latin_name:"Phylloscopus trochiloides",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Greenish warbler",latin_name:"Phylloscopus tenellipes",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Pale-legged leaf warbler",latin_name:"Phylloscopus borealis",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Arctic warbler",latin_name:"Phylloscopus proregulus",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Pallas's warbler",latin_name:"Phylloscopus inornatus",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Yellow-browed warbler",latin_name:"Phylloscopus humei",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Hume's warbler",latin_name:"Phylloscopus schwarzi",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Radde's warbler",latin_name:"Phylloscopus fuscatus",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Dusky warbler",latin_name:"Phylloscopus bonelli",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Western Bonelli's warbler",latin_name:"Phylloscopus orientalis",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Eastern Bonelli's warbler",latin_name:"Phylloscopus sibilatrix",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Wood warbler",latin_name:"Phylloscopus collybita",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Common chiffchaff",latin_name:"Phylloscopus ibericus",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Iberian chiffchaff",latin_name:"Phylloscopus trochilus",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Willow warbler",latin_name:"Sylvia atricapilla",family:"Warblers",status:"A",comminality:"resident breeding species & summer visitor"},
{name:"Blackcap",latin_name:"Sylvia borin",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Garden warbler",latin_name:"Sylvia nisoria",family:"Warblers",status:"A",comminality:"passage migrant"},
{name:"Barred warbler",latin_name:"Sylvia curruca",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Lesser whitethroat",latin_name:"Sylvia hortensis",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Western Orphean warbler",latin_name:"Sylvia Sylvia crassirostris",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Eastern Orphean warbler",latin_name:"Sylvia nana",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Asian desert warbler",latin_name:"Sylvia communis",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Whitethroat",latin_name:"Sylvia undata",family:"Warblers",status:"A",comminality:"resident breeding species"},
{name:"Dartford warbler",latin_name:"Sylvia sarda",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Marmora's warbler",latin_name:"Sylvia ruppeli",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Rüppell's warbler",latin_name:"Sylvia conspicillata",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Spectacled warbler",latin_name:"Sylvia cantillans",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Subalpine warbler",latin_name:"Sylvia subalpina",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Moltoni's warbler",latin_name:"Sylvia melanocephala",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Sardinian warbler",latin_name:"Helopsaltes certhiola",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Pallas's grasshopper warbler",latin_name:"Locustella lanceolata",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Lanceolated warbler",latin_name:"Locustella naevia",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Common grasshopper warbler",latin_name:"Locustella fluviatilis",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"River warbler",latin_name:"Locustella luscinioides",family:"Warblers",status:"A",comminality:"rare breeding summer visitor"},
{name:"Savi's warbler",latin_name:"Arundinax aedon",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Thick-billed warbler",latin_name:"Iduna caligata",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Booted warbler",latin_name:"Iduna rama",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Sykes's warbler",latin_name:"Iduna pallida",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Eastern olivaceous warbler",latin_name:"Hippolais olivetorum",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Olive-tree warbler",latin_name:"Hippolais icterina",family:"Warblers",status:"A",comminality:"scarce migrant, occasional breeder"},
{name:"Icterine warbler",latin_name:"Hippolais polyglotta",family:"Warblers",status:"A",comminality:"scarce migrant, occasional breeder"},
{name:"Melodious warbler",latin_name:"Acrocephalus paludicola",family:"Warblers",status:"A",comminality:"scarce migrant"},
{name:"Aquatic warbler",latin_name:"Acrocephalus schoenobaenus",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Sedge warbler",latin_name:"Acrocephalus agricola",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Paddyfield warbler",latin_name:"Acrocephalus dumetorum",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Blyth's reed warbler",latin_name:"Acrocephalus palustris",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Marsh warbler",latin_name:"Acrocephalus scirpaceus",family:"Warblers",status:"A",comminality:"breeding summer visitor"},
{name:"Eurasian reed warbler",latin_name:"Acrocephalus arundinaceus",family:"Warblers",status:"A",comminality:"rare vagrant, has bred"},
{name:"Great reed warbler",latin_name:"Cisticola juncidis",family:"Warblers",status:"A",comminality:"rare vagrant"},
{name:"Zitting cisticola",latin_name:"Bombycilla cedrorum",family:"Cisticolas",status:"A",comminality:"rare vagrant"},
{name:"Cedar waxwing",latin_name:"Bombycilla garrulus",family:"Waxwings",status:"A",comminality:"winter visitor in highly varied numbers."},
{name:"Bohemian waxwing",latin_name:"Tichodroma muraria",family:"Waxwings",status:"A",comminality:"rare vagrant"},
{name:"Wallcreeper",latin_name:"Sitta canadensis",family:"Wallcreeper",status:"A",comminality:"rare vagrant"},
{name:"Red-breasted nuthatch",latin_name:"Sitta europaea",family:"Nuthatches",status:"A",comminality:"resident breeding species"},
{name:"Eurasian nuthatch",latin_name:"Certhia familiaris",family:"Nuthatches",status:"A",comminality:"resident breeding species"},
{name:"Common treecreeper",latin_name:"Certhia brachydactyla",family:"Treecreepers",status:"A",comminality:"rare vagrant"},
{name:"Short-toed treecreeper",latin_name:"Troglodytes troglodytes",family:"Treecreepers",status:"A",comminality:"resident breeding species"},
{name:"Eurasian wren",latin_name:"Mimus polyglottos",family:"Wrens",status:"A",comminality:"rare vagrant"},
{name:"Northern mockingbird",latin_name:"Toxostoma rufum",family:"Mockingbirds and allies",status:"A",comminality:"rare vagrant (one record)"},
{name:"Brown thrasher",latin_name:"Dumetella carolinensis",family:"Mockingbirds and allies",status:"A",comminality:"rare vagrant (two records)"},
{name:"Grey catbird",latin_name:"Sturnus vulgaris",family:"Mockingbirds and allies",status:"A",comminality:"resident breeding species and winter visitor"},
{name:"Common starling",latin_name:"Pastor roseus",family:"Starlings",status:"A",comminality:"rare vagrant"},
{name:"Rosy starling",latin_name:"Cinclus cinclus",family:"Starlings",status:"A",comminality:"resident breeding species"},
{name:"White-throated dipper",latin_name:"Zoothera dauma",family:"Dippers",status:"A",comminality:"rare vagrant"},
{name:"White's thrush",latin_name:"Ixoreus naevius",family:"Thrushes",status:"A",comminality:"very rare vagrant (one record)"},
{name:"Varied thrush",latin_name:"Hylocichla mustelina",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Wood thrush",latin_name:"Catharus guttatus",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Hermit thrush",latin_name:"Catharus ustulatus",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Swainson's thrush",latin_name:"Catharus minimus",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Grey-cheeked thrush",latin_name:"Catharus fuscescens",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Veery",latin_name:"Geokichla sibirica",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Siberian thrush",latin_name:"Turdus torquatus",family:"Thrushes",status:"A",comminality:"breeding summer visitor"},
{name:"Ring ouzel",latin_name:"Turdus merula",family:"Thrushes",status:"A",comminality:"resident breeding species"},
{name:"Common blackbird",latin_name:"Turdus obscurus",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Eyebrowed thrush",latin_name:"Turdus eunomus",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Dusky thrush",latin_name:"Turdus naumanni",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Naumann's thrush",latin_name:"Turdus atrogularis",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Black-throated thrush",latin_name:"Turdus ruficollis",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Red-throated thrush",latin_name:"Turdus pilaris",family:"Thrushes",status:"A",comminality:"winter visitor, rare breeder"},
{name:"Fieldfare",latin_name:"Turdus philomelos",family:"Thrushes",status:"A",comminality:"resident breeding species"},
{name:"Song thrush",latin_name:"Turdus iliacus",family:"Thrushes",status:"A",comminality:"winter visitor, rare breeder"},
{name:"Redwing",latin_name:"Turdus viscivorus",family:"Thrushes",status:"A",comminality:"resident breeding species"},
{name:"Mistle thrush",latin_name:"Turdus migratorius",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"American robin",latin_name:"Cercotrichas galactotes",family:"Thrushes",status:"A",comminality:"rare vagrant"},
{name:"Rufous bush robin",latin_name:"Muscicapa dauurica",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Asian brown flycatcher",latin_name:"Muscicapa striata",family:"Old World flycatchers and chats",status:"A",comminality:"breeding summer visitor"},
{name:"Spotted flycatcher",latin_name:"Erithacus rubecula",family:"Old World flycatchers and chats",status:"A",comminality:"resident breeding species"},
{name:"European robin",latin_name:"Larvivora cyanea",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Siberian blue robin",latin_name:"Larvivora sibilans",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Rufous-tailed robin",latin_name:"Calliope calliope",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Siberian rubythroat",latin_name:"Irania gutturalis",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"White-throated robin",latin_name:"Tarsiger cyanurus",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Red-flanked bluetail",latin_name:"Luscinia luscinia",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Thrush nightingale",latin_name:"Luscinia megarhynchos",family:"Old World flycatchers and chats",status:"A",comminality:"breeding summer visitor"},
{name:"Nightingale",latin_name:"Luscinia svecica",family:"Old World flycatchers and chats",status:"A",comminality:"scarce migrant, occasional breeder"},
{name:"Bluethroat",latin_name:"Ficedula parva",family:"Old World flycatchers and chats",status:"A",comminality:"scarce migrant"},
{name:"Red-breasted flycatcher",latin_name:"Ficedula albicilla",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Taiga flycatcher",latin_name:"Ficedula albicollis",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Collared flycatcher",latin_name:"Ficedula hypoleuca",family:"Old World flycatchers and chats",status:"A",comminality:"breeding summer visitor"},
{name:"European pied flycatcher",latin_name:"Phoenicurus ochruros",family:"Old World flycatchers and chats",status:"A",comminality:"scarce breeding resident, passage migrant & winter visitor"},
{name:"Black redstart",latin_name:"Phoenicurus phoenicurus",family:"Old World flycatchers and chats",status:"A",comminality:"breeding summer visitor"},
{name:"Common redstart",latin_name:"Phoenicurus moussieri",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Moussier's redstart",latin_name:"Monticola saxatilis",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Common rock thrush",latin_name:"Monticola solitarius",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Blue rock thrush",latin_name:"Saxicola rubetra",family:"Old World flycatchers and chats",status:"A",comminality:"breeding summer visitor & passage migrant"},
{name:"Whinchat",latin_name:"Saxicola maurus",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Siberian stonechat",latin_name:"Saxicola rubicola",family:"Old World flycatchers and chats",status:"A",comminality:"resident breeding species"},
{name:"European stonechat",latin_name:"Oenanthe oenanthe",family:"Old World flycatchers and chats",status:"A",comminality:"breeding summer visitor & passage migrant"},
{name:"Northern wheatear",latin_name:"Oenanthe isabellina",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Isabelline wheatear",latin_name:"Oenanthe deserti",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Desert wheatear",latin_name:"Oenanthe pleschanka",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Pied wheatear",latin_name:"Oenanthe hispanica",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Western black-eared wheatear",latin_name:"Oenanthe melanoleuca",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"Eastern black-eared wheatear",latin_name:"Oenanthe leucopyga",family:"Old World flycatchers and chats",status:"A",comminality:"rare vagrant"},
{name:"White-crowned black wheatear",latin_name:"Prunella modularis",family:"Old World flycatchers and chats",status:"A",comminality:"resident breeding species"},
{name:"Dunnock",latin_name:"Prunella collaris",family:"Accentors",status:"A",comminality:"rare vagrant"},
{name:"Alpine accentor",latin_name:"Prunella montanella",family:"Accentors",status:"A",comminality:"rare vagrant with multiple records in 2016"},
{name:"Siberian accentor",latin_name:"Passer domesticus",family:"Accentors",status:"A",comminality:"resident breeding species"},
{name:"House sparrow",latin_name:"Passer hispaniolensis",family:"Sparrows",status:"A",comminality:"rare vagrant"},
{name:"Spanish sparrow",latin_name:"Passer montanus",family:"Sparrows",status:"A",comminality:"resident breeding species"},
{name:"Eurasian tree sparrow",latin_name:"Petronia petronia",family:"Sparrows",status:"A",comminality:"rare vagrant"},
{name:"Rock sparrow",latin_name:"Motacilla flava",family:"Sparrows",status:"S",comminality:"ven races including:"},
{name:"Western yellow wagtail",latin_name:"Motacilla tschutschensis",family:"Wagtails and pipits",status:"A",comminality:"rare vagrant"},
{name:"Eastern yellow wagtail",latin_name:"Motacilla citreola",family:"Wagtails and pipits",status:"A",comminality:"rare vagrant"},
{name:"Citrine wagtail",latin_name:"Motacilla cinerea",family:"Wagtails and pipits",status:"A",comminality:"resident breeding species"},
{name:"Grey wagtail",latin_name:"Motacilla alba",family:"Wagtails and pipits",status:"A",comminality:"resident breeding species with two additional visiting races"},
{name:"White wagtail",latin_name:"Anthus richardi",family:"Wagtails and pipits",status:"A",comminality:"scarce migrant"},
{name:"Richard's pipit",latin_name:"Anthus godlewskii",family:"Wagtails and pipits",status:"A",comminality:"rare vagrant"},
{name:"Blyth's pipit",latin_name:"Anthus campestris",family:"Wagtails and pipits",status:"A",comminality:"scarce migrant"},
{name:"Tawny pipit",latin_name:"Anthus hodgsoni",family:"Wagtails and pipits",status:"A",comminality:"rare vagrant"},
{name:"Olive-backed pipit",latin_name:"Anthus trivialis",family:"Wagtails and pipits",status:"A",comminality:"breeding summer visitor"},
{name:"Tree pipit",latin_name:"Anthus gustavi",family:"Wagtails and pipits",status:"A",comminality:"rare vagrant"},
{name:"Pechora pipit",latin_name:"Anthus pratensis",family:"Wagtails and pipits",status:"A",comminality:"resident breeding species"},
{name:"Meadow pipit",latin_name:"Anthus cervinus",family:"Wagtails and pipits",status:"A",comminality:"scarce migrant"},
{name:"Red-throated pipit",latin_name:"Anthus petrosus",family:"Wagtails and pipits",status:"A",comminality:"resident breeding species"},
{name:"Eurasian rock pipit",latin_name:"Anthus spinoletta",family:"Wagtails and pipits",status:"A",comminality:"winter visitor"},
{name:"Water pipit",latin_name:"Anthus rubescens",family:"Wagtails and pipits",status:"A",comminality:"rare vagrant"},
{name:"Buff-bellied pipit",latin_name:"Fringilla coelebs",family:"Wagtails and pipits",status:"A",comminality:"resident breeding species"},
{name:"Common chaffinch",latin_name:"Fringilla montifringilla",family:"Finches",status:"A",comminality:"winter visitor, occasional breeder"},
{name:"Brambling",latin_name:"Serinus serinus",family:"Finches",status:"A",comminality:"scarce passage migrant, occasional breeder"},
{name:"European serin",latin_name:"Chloris chloris",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"European greenfinch",latin_name:"Carduelis citrinella",family:"Finches",status:"A",comminality:"rare vagrant"},
{name:"Citril finch",latin_name:"Carduelis carduelis",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"European goldfinch",latin_name:"Linaria cannabina",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"Eurasian linnet",latin_name:"Linaria flavirostris",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"Twite",latin_name:"Spinus spinus",family:"Finches",status:"A",comminality:"resident breeding species and winter visitor"},
{name:"Eurasian siskin",latin_name:"Acanthis cabaret",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"Lesser redpoll",latin_name:"Acanthis flammea",family:"Finches",status:"A",comminality:"winter visitor and passage migrant, occasional breeder"},
{name:"Mealy redpoll",latin_name:"Acanthis hornemanni",family:"Finches",status:"A",comminality:"scarce migrant"},
{name:"Arctic redpoll",latin_name:"Loxia leucoptera",family:"Finches",status:"A",comminality:"rare vagrant"},
{name:"Two-barred crossbill",latin_name:"Loxia curvirostra",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"Common crossbill",latin_name:"Loxia scotica",family:"Finches",status:"A",comminality:"resident endemic breeding species"},
{name:"Scottish crossbill",latin_name:"Loxia pytyopsittacus",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"Parrot crossbill",latin_name:"Bucanetes githagineus",family:"Finches",status:"A",comminality:"rare vagrant"},
{name:"Trumpeter finch",latin_name:"Erythrina erythrinus",family:"Finches",status:"A",comminality:"scarce migrant, occasional breeder"},
{name:"Common rosefinch",latin_name:"Pinicola enucleator",family:"Finches",status:"A",comminality:"rare vagrant"},
{name:"Pine grosbeak",latin_name:"Pyrrhula pyrrhula",family:"Finches",status:"A",comminality:"resident breeding species"},
{name:"Eurasian bullfinch",latin_name:"Coccothraustes coccothraustes",family:"Finches",status:"A",comminality:"scarce resident breeding species"},
{name:"Hawfinch",latin_name:"Hesperiphona vespertinua",family:"Finches",status:"A",comminality:"rare vagrant"},
{name:"Evening grosbeak",latin_name:"Plectrophenax nivalis",family:"Finches",status:"A",comminality:"winter visitor & scarce breeder"},
{name:"Snow bunting",latin_name:"Calcarius lapponicus",family:"Longspurs",status:"A",comminality:"winter visitor, occasional breeder"},
{name:"Lapland bunting",latin_name:"Piranga rubra",family:"Longspurs",status:"A",comminality:"rare vagrant"},
{name:"Summer tanager",latin_name:"Piranga olivacea",family:"Cardinals and allies",status:"A",comminality:"rare vagrant"},
{name:"Scarlet tanager",latin_name:"Pheucticus ludovicianus",family:"Cardinals and allies",status:"A",comminality:"rare vagrant"},
{name:"Rose-breasted grosbeak",latin_name:"Passerina cyanea",family:"Cardinals and allies",status:"A",comminality:"rare vagrant"},
{name:"Indigo bunting",latin_name:"Emberiza spodocephala",family:"Cardinals and allies",status:"A",comminality:"rare vagrant"},
{name:"Black-faced bunting",latin_name:"Emberiza leucocephalos",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Pine bunting",latin_name:"Emberiza citrinella",family:"Buntings",status:"A",comminality:"resident breeding species"},
{name:"Yellowhammer",latin_name:"Emberiza cirlus",family:"Buntings",status:"A",comminality:"resident breeding species"},
{name:"Cirl bunting",latin_name:"Emberiza cia",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Rock bunting",latin_name:"Emberiza hortulana",family:"Buntings",status:"A",comminality:"scarce migrant"},
{name:"Ortolan bunting",latin_name:"Emberiza caesia",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Cretzschmar's bunting",latin_name:"Emberiza chrysophrys",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Yellow-browed bunting",latin_name:"Emberiza rustica",family:"Buntings",status:"A",comminality:"scarce migrant"},
{name:"Rustic bunting",latin_name:"Emberiza fucata",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Chestnut-eared bunting",latin_name:"Emberiza pusilla",family:"Buntings",status:"A",comminality:"scarce migrant"},
{name:"Little bunting",latin_name:"Emberiza aureola",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Yellow-breasted bunting",latin_name:"Emberiza rutila",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Chestnut bunting",latin_name:"Emberiza schoeniclus",family:"Buntings",status:"A",comminality:"resident breeding species"},
{name:"Reed bunting",latin_name:"Emberiza pallasi",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Pallas' reed bunting",latin_name:"Emberiza melanocephala",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Black-headed bunting",latin_name:"Emberiza calandra",family:"Buntings",status:"A",comminality:"resident breeding species"},
{name:"Corn bunting",latin_name:"Pipilo erythrophthalmus",family:"Buntings",status:"A",comminality:"rare vagrant"},
{name:"Eastern towhee",latin_name:"Chondestes grammacus",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"Lark sparrow",latin_name:"Passerculus sandwichensis",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"Savannah sparrow",latin_name:"Melospiza melodia",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"Song sparrow",latin_name:"Zonotrichia leucophrys",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"White-crowned sparrow",latin_name:"Zonotrichia albicollis",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"White-throated sparrow",latin_name:"junco hyemalis",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"Dark-eyed junco",latin_name:"Dolichonyx oryzivorus",family:"American sparrows",status:"A",comminality:"rare vagrant"},
{name:"Bobolink",latin_name:"Molothrus ater",family:"Icterids",status:"A",comminality:"rare vagrant"},
{name:"Brown-headed cowbird",latin_name:"Icterus galbula",family:"Icterids",status:"A",comminality:"rare vagrant"},
{name:"Baltimore oriole",latin_name:"Agelaius phoeniceus",family:"Icterids",status:"A",comminality:"rare vagrant"},
{name:"Red-winged blackbird",latin_name:"Seiurus aurocapilla",family:"Icterids",status:"A",comminality:"rare vagrant"},
{name:"Ovenbird",latin_name:"Parkesia noveboracensis",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Northern waterthrush",latin_name:"Vermivora chrysoptera",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Golden-winged warbler",latin_name:"Mniotilta varia",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Black-and-white warbler",latin_name:"Oreothlypis peregrina",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Tennessee warbler",latin_name:"Geothlypis trichas",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Common yellowthroat",latin_name:"Setophaga citrina",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Hooded warbler",latin_name:"Setophaga ruticilla",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"American redstart",latin_name:"Setophaga tigrina",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Cape May warbler",latin_name:"Setophaga americana",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Northern parula",latin_name:"Setophaga magnolia",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Magnolia warbler",latin_name:"Setophaga castanea",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Bay-breasted warbler",latin_name:"Setophaga fusca",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Blackburnian warbler",latin_name:"Setophaga petechia",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Yellow warbler",latin_name:"Setophaga pensylvanica",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Chestnut-sided warbler",latin_name:"Setophaga striata",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Blackpoll warbler",latin_name:"Setophaga coronata",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Yellow-rumped warbler",latin_name:"Cardellina pusilla",family:"New World warblers",status:"A",comminality:"rare vagrant"},
{name:"Wilson's warbler",latin_name:"Sula leucogaster",family:"New World warblers",status:"A",comminality:"rare vagrant, first recorded 2019."}]
)
















































// [
//     {
//         name: "Brant goose",
//         latinname: "Branta bernicla",
//         family: "Ducks, geese and swans",
//         status: "A",
//         comminality: "winter visitor"
//     },

//     {
//         name: "Red-breasted goose",
//     latinname: "Branta ruficollis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Canada goose",
//     latinname: "Branta canadensis",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident introduced population, some wild vagrants"
//     },

//     {
//         name: "Barnacle goose",
//     latinname: "Branta leucopsis",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "winter visitor and resident introduced population"
//     },

//     {
//         name: "Cackling goose",
//     latinname: "Branta hutchinsii",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Snow goose",
//     latinname: "Anser caerulescens",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident introduced population, some wild vagrants"
//     },

//     {
//         name: "Greylag goose",
//     latinname: "Anser anser",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident wild and feral populations, winter visitor"
//     },

//     {
//         name: "Taiga bean goose",
//     latinname: "Anser fabalis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Pink-footed goose",
//     latinname: "Anser brachyrhynchus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Tundra bean goose",
//     latinname: "Anser serrirostris",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Greater white-fronted goose",
//     latinname: "Anser albifrons",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Lesser white-fronted goose",
//     latinname: "Anser erythropus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Mute swan",
//     latinname: "Cygnus olor",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Tundra swan",
//     latinname: "Cygnus columbianus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Whooper swan",
//     latinname: "Cygnus cygnus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor and occasional breeder"
//     },

//     {
//         name: "Egyptian goose",
//     latinname: "Alopochen aegyptiaca",
//     family: "Ducks, geese and swans",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Ruddy shelduck",
//     latinname: "Tadorna ferruginea",
//     family: "Ducks, geese and swans",
//     status: "B",
//     comminality: "Records since 1946 are presumed escapes from captivity"
//     },

//     {
//         name: "Common shelduck",
//     latinname: "Tadorna tadorna",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Mandarin duck",
//     latinname: "Aix galericulata",
//     family: "Ducks, geese and swans",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Baikal teal",
//     latinname: "Sibirionetta formosa",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Garganey",
//     latinname: "Spatula querquedula",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Blue-winged teal",
//     latinname: "Spatula discors",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern shoveler",
//     latinname: "Spatula clypeata",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Gadwall",
//     latinname: "Mareca strepera",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Falcated duck",
//     latinname: "Mareca falcata",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Eurasian wigeon",
//     latinname: "Mareca penelope",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "American wigeon",
//     latinname: "Mareca americana",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Mallard",
//     latinname: "Anas platyrhynchos",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident breeder, winter visitor and naturalised releases"
//     },

//     {
//         name: "American black duck",
//     latinname: "Anas rubripes",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern pintail",
//     latinname: "Anas acuta",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Common teal",
//     latinname: "Anas crecca",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Green-winged teal",
//     latinname: "Anas carolinensis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Red-crested pochard",
//     latinname: "Netta rufina",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "scarce migrant and introduced breeder"
//     },

//     {
//         name: "Canvasback",
//     latinname: "Aythya valisineria",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Redhead (duck)",
//     latinname: "Aythya americana",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common pochard",
//     latinname: "Aythya ferina",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Ferruginous duck",
//     latinname: "Aythya nyroca",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Ring-necked duck",
//     latinname: "Aythya collaris",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Tufted duck",
//     latinname: "Aythya fuligula",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Greater scaup",
//     latinname: "Aythya marila",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor and occasional breeder"
//     },

//     {
//         name: "Lesser scaup",
//     latinname: "Aythya affinis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Steller's eider",
//     latinname: "Polysticta stelleri",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "King eider",
//     latinname: "Somateria spectabilis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common eider",
//     latinname: "Somateria mollissima",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Harlequin duck",
//     latinname: "Histrionicus histrionicus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Surf scoter",
//     latinname: "Melanitta perspicillata",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Velvet scoter",
//     latinname: "Melanitta fusca",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "White-winged scoter",
//     latinname: "Melanitta deglandi",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common scoter",
//     latinname: "Melanitta nigra",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Black scoter",
//     latinname: "Melanitta americana",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Long-tailed duck",
//     latinname: "Clangula hyemalis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor and occasional breeder"
//     },

//     {
//         name: "Bufflehead",
//     latinname: "Bucephala albeola",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common goldeneye",
//     latinname: "Bucephala clangula",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Barrow's goldeneye",
//     latinname: "Bucephala islandica",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Smew",
//     latinname: "Mergellus albellus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Hooded merganser",
//     latinname: "Lophodytes cucullatus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common merganser",
//     latinname: "Mergus merganser",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Red-breasted merganser",
//     latinname: "Mergus serrator",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Ruddy duck",
//     latinname: "Oxyura jamaicensis",
//     family: "Ducks, geese and swans",
//     status: "C",
//     comminality: " introduced species currently subject to an eradication programme"
//     },

//     {
//         name: "Red grouse",
//     latinname: "Lagopus lagopus scotica",
//     family: "Grouse",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Rock ptarmigan",
//     latinname: "Lagopus muta",
//     family: "Grouse",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Black grouse",
//     latinname: "Tetrao tetrix",
//     family: "Grouse",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Western capercaillie",
//     latinname: "Tetrao urogallus",
//     family: "Grouse",
//     status: "C",
//     comminality: "resident reintroduced population"
//     },

//     {
//         name: "Red-legged partridge",
//     latinname: "Alectoris rufa",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Grey partridge",
//     latinname: "Perdix perdix",
//     family: "Pheasants, partridges and quail",
//     status: "A & C",
//     comminality: "resident breeder and introduced gamebird"
//     },

//     {
//         name: "Common quail",
//     latinname: "Coturnix coturnix",
//     family: "Pheasants, partridges and quail",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Common pheasant",
//     latinname: "Phasianus colchicus",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Golden pheasant",
//     latinname: "Chrysolophus pictus",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Lady Amherst's pheasant",
//     latinname: "Chrysolophus amherstiae",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "introduced population now extinct"
//     },

//     {
//         name: "Red-throated loon",
//     latinname: "Gavia stellata",
//     family: "Divers",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Black-throated loon",
//     latinname: "Gavia arctica",
//     family: "Divers",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Pacific loon",
//     latinname: "Gavia pacifica",
//     family: "Divers",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common loon",
//     latinname: "Gavia immer",
//     family: "Divers",
//     status: "A",
//     comminality: "winter visitor, has bred"
//     },

//     {
//         name: "Yellow-billed loon",
//     latinname: "Gavia adamsii",
//     family: "Divers",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Black-browed albatross",
//     latinname: "Thalassarche melanophris",
//     family: "Albatrosses",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Atlantic yellow-nosed albatross",
//     latinname: "Thalassarche chlororhynchos",
//     family: "Albatrosses",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern fulmar",
//     latinname: "Fulmarus glacialis",
//     family: "Petrels",
//     status: "A",
//     comminality: "resident and migrant breeder, passage migrant"
//     },

//     {
//         name: "Fea's petrel",
//     latinname: "Pterodroma feae",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Black-capped petrel",
//     latinname: "Pterodroma hasitata",
//     family: "Petrels",
//     status: "B",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Cory's shearwater",
//     latinname: "Calonectris borealis",
//     family: "Petrels",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Scopoli's shearwater",
//     latinname: "Calonectris diomedea",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Great shearwater",
//     latinname: "Ardenna gravis",
//     family: "Petrels",
//     status: "A",
//     comminality: "passage migrant"
//     },

//     {
//         name: "Sooty shearwater",
//     latinname: "Ardenna grisea",
//     family: "Petrels",
//     status: "A",
//     comminality: "passage migrant"
//     },

//     {
//         name: "Manx shearwater",
//     latinname: "Puffinus puffinus",
//     family: "Petrels",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Yelkouan shearwater",
//     latinname: "Puffinus yelkouan",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Balearic shearwater",
//     latinname: "Puffinus mauretanicus",
//     family: "Petrels",
//     status: "A",
//     comminality: "passage migrant"
//     },

//     {
//         name: "Barolo shearwater",
//     latinname: "Puffinus baroli",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Wilson's storm petrel",
//     latinname: "Oceanites oceanicus",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant, more regularly seen well offshore"
//     },

//     {
//         name: "White-faced storm petrel",
//     latinname: "Pelagodroma marina",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "European storm petrel",
//     latinname: "Hydrobates pelagicus",
//     family: "Petrels",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Leach's storm petrel",
//     latinname: "Oceanodroma leucorhea",
//     family: "Petrels",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Swinhoe's storm petrel",
//     latinname: "Oceanodroma monorhis",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Red-billed tropicbird",
//     latinname: "Phaethon aethereus",
//     family: "Tropicbirds",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern gannet",
//     latinname: "Morus bassanus",
//     family: "Gannets and boobies",
//     status: "A",
//     comminality: "breeding summer visitor and passage migrant"
//     },

//     {
//         name: "Red-footed booby",
//     latinname: "Sula sula",
//     family: "Gannets and boobies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Great cormorant",
//     latinname: "Phalacrocorax carbo",
//     family: "Cormorants",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Double-crested cormorant",
//     latinname: "Phalacrocorax auritus",
//     family: "Cormorants",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "European shag",
//     latinname: "Phalacrocorax aristotelis",
//     family: "Cormorants",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Magnificent frigatebird",
//     latinname: "Fregata magnificens",
//     family: "Frigatebirds",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Ascension frigatebird",
//     latinname: "Fregata aquila",
//     family: "Frigatebirds",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Dalmatian pelican",
//     latinname: "Pelecanus crispus",
//     family: "Pelicans",
//     status: "A",
//     comminality: "very rare migrant"
//     },
// //CODE IS BROKEN HERE I THINK
//     {
//         name: "Great bittern",
//     latinname: "Botaurus stellaris",
//     family: "Pelicans",
//     status: "A",
//     comminality: "resident breeding species and winter migrant"
//     },

//     {
//         name: "American bittern",
//     latinname: "Botaurus lentiginosus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Little bittern",
//     latinname: "Ixobrychus minutus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce migrant, recently bred"
//     },

//     {
//         name: "Black-crowned night heron",
//     latinname: "Nycticorax nycticorax",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce migrant, has bred"
//     },

//     {
//         name: "Green heron",
//     latinname: "Butorides virescens",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Squacco heron",
//     latinname: "Ardeola ralloides",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Chinese pond heron",
//     latinname: "Ardeola bacchus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Cattle egret",
//     latinname: "Bubulcus ibis",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce but increasing resident, recently bred"
//     },

//     {
//         name: "Little egret",
//     latinname: "Egretta garzetta",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//     },

//     {
//         name: "Snowy egret",
//     latinname: "Egretta thula",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Great egret",
//     latinname: "Ardea alba",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "resident breeding species, first bred 2012"
//     },

//     {
//         name: "Grey heron",
//     latinname: "Ardea cinerea",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "resident breeding species and winter migrant"
//     },

//     {
//         name: "Great blue heron",
//     latinname: "Ardea herodias",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Purple heron",
//     latinname: "Ardea purpurea",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce migrant, recently bred"
//     },

//     {
//         name: "Glossy ibis",
//     latinname: "Plegadis falcinellus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common spoonbill",
//     latinname: "Platalea leucorodia",
//     family: "Ibises and spoonbills",
//     status: "A",
//     comminality: "scarce migrant, recently bred"
//     },

//     {
//         name: "Black stork",
//     latinname: "Ciconia nigra",
//     family: "Ibises and spoonbills",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "White stork",
//     latinname: "Ciconia ciconia",
//     family: "Storks",
//     status: "A",
//     comminality: "scarce migrant, formerly bred"
//     },

//     {
//         name: "Pied-billed grebe",
//     latinname: "Podilymbus podiceps",
//     family: "Storks",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Little grebe",
//     latinname: "Tachybaptus ruficollis",
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Great crested grebe",
//     latinname: "Podiceps crstatus", 
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Red-necked grebe",
//     latinname: "Podiceps grisegena",
//     family: "Grebes",
//     status: "A",
//     comminality: "winter visitor, has bred"
//     },

//     {
//         name: "Horned grebe",
//     latinname: "Podiceps auritus",
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Black-necked grebe",
//     latinname: "Podiceps nigricollis",
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "European honey buzzard",
//     latinname: "Pernis apivorus",
//     family: "Grebes",
//     status: "A",
//     comminality: "breeding summer visitor and passage migrant"
//     },

//     {
//         name: "Black kite",
//     latinname: "Milvus migrans",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Red kite",
//     latinname: "Milvus milvus",
//     family: "Buzzards, kites and allies",
//     status: "A & C",
//     comminality: "resident breeder and widespread introductions"
//     },

//     {
//         name: "White-tailed eagle",
//     latinname: "Haliaeetus albicilla",
//     family: "Buzzards, kites and allies",
//     status: "A & C",
//     comminality: "resident breeder and widespread introductions"
//     },

//     {
//         name: "Egyptian vulture",
//     latinname: "Neophron percnopterus",
//     family: "Buzzards, kites and allies",
//     status: "B",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Short-toed snake eagle",
//     latinname: "Circaetus gallicus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Western marsh harrier",
//     latinname: "Circus aeruginosus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder and passage migrant"
//     },

//     {
//         name: "Hen harrier",
//     latinname: "Circus cyaneus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder, winter visitor and passage migrant"
//     },

//     {
//         name: "Pallid harrier",
//     latinname: "Circus macrourus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Montagu's harrier",
//     latinname: "Circus pygargus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "breeding summer visitor and passage migrant"
//     },

//     {
//         name: "Northern goshawk",
//     latinname: "Accipiter gentilis",
//     family: "Buzzards, kites and allies",
//     status: "A & C",
//     comminality: "resident breeder and naturalised escapes"
//     },

//     {
//         name: "Eurasian sparrowhawk",
//     latinname: "Accipiter nisus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder and passage migrant"
//     },

//     {
//         name: "Common buzzard",
//     latinname: "Buteo buteo",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder and passage migrant"
//     },

//     {
//         name: "Rough-legged buzzard",
//     latinname: "Buteo lagopus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Greater spotted eagle",
//     latinname: "Clanga clanga",
//     family: "Buzzards, kites and allies",
//     status: "B",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Golden eagle",
//     latinname: "Aquila chrysaetos",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Osprey",
//     latinname: "Pandion haliaetus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Lesser kestrel",
//     latinname: "Falco naumanni",
//     family: "Osprey",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common kestrel",
//     latinname: "Falco tinnunculus",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "American kestrel",
//     latinname: "Falco sparverius",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-footed falcon",
//     latinname: "Falco vespertinus",
//     family: "Falcons",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Amur falcon",
//     latinname: "Falco amurensis",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Merlin (bird)",
//     latinname: "Falco columbarius",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian hobby",
//     latinname: "Falco subbuteo",
//     family: "Falcons",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Eleonora's falcon",
//     latinname: "Falco eleonorae",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Gyr falcon",
//     latinname: "Falco rusticolus",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Peregrine falcon",
//     latinname: "Falco peregrinus",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Water rail",
//     latinname: "Rallus aquaticus",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Spotted crake",
//     latinname: "Porzana porzana",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "scarce breeding summer visitor"
//         },

//     {
//         name: "Sora (bird)",
//     latinname: "Porzana carolina",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little crake",
//     latinname: "Porzana parva",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Baillon's crake",
//     latinname: "Porzana pusilla",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant, formerly bred"
//         },

//     {
//         name: "Corn crake",
//     latinname: "Crex crex",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common moorhen",
//     latinname: "Gallinula chloropus",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Western swamphen",
//     latinname: "Porphyrio porphyrio",
//     family: "Rails, crakes and coots",
//     status: "O",
//     comminality: "e record"
//         },

//     {
//         name: "Allen's gallinule",
//     latinname: "Porphyrio alleni",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "American purple gallinule",
//     latinname: "Porphyrio martinicus",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian coot",
//     latinname: "Fulica atra",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "American coot",
//     latinname: "Fulica americana",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common crane",
//     latinname: "Grus grus",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Sandhill crane",
//     latinname: "Grus canadensis",
//     family: "Cranes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little bustard",
//     latinname: "Tetrax tetrax",
//     family: "Cranes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Macqueen's bustard",
//     latinname: "Chlamydotis macqueenii",
//     family: "Bustards",
//     status: "B",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great bustard",
//     latinname: "Otis tarda",
//     family: "Bustards",
//     status: "A",
//     comminality: "rare vagrant and recently reintroduced breeding resident species"
//         },

//     {
//         name: "Eurasian oystercatcher",
//     latinname: "Haematopus ostralegus",
//     family: "Bustards",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Black-winged stilt",
//     latinname: "Himantopus himantopus",
//     family: "Oystercatchers",
//     status: "A",
//     comminality: "rare vagrant and occasional breeder"
//         },

//     {
//         name: "Pied avocet",
//     latinname: "Recurvirostra avosetta",
//     family: "Avocets and stilts",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian stone-curlew",
//     latinname: "Burhinus oedicnemus",
//     family: "Avocets and stilts",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Cream-colored courser",
//     latinname: "Cursorius cursor",
//     family: "Thick-knees",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Collared pratincole",
//     latinname: "Glareola pratincola",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Oriental pratincole",
//     latinname: "Glareola maldivarum",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-winged pratincole",
//     latinname: "Glareola nordmanni",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little ringed plover",
//     latinname: "Charadrius dubius",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Ringed plover",
//     latinname: "Charadrius hiaticula",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "resident breeding species and summer visitor"
//         },

//     {
//         name: "Semipalmated plover",
//     latinname: "Charadrius semipalmatus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Killdeer",
//     latinname: "Charadrius vociferus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Kentish plover",
//     latinname: "Charadrius alexandrinus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "former breeder, now a rare vagrant."
//         },

//     {
//         name: "Lesser sand plover",
//     latinname: "Charadrius mongolus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Greater sand plover",
//     latinname: "Charadrius leschenaultii",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Caspian plover",
//     latinname: "Charadrius asiaticus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian dotterel",
//     latinname: "Charadrius morinellus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "American golden plover",
//     latinname: "Pluvialis dominica",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Pacific golden plover",
//     latinname: "Pluvialis fulva",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European golden plover",
//     latinname: "Pluvialis apricaria",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "winter visitor and passage migrant, scarce breeder"
//         },

//     {
//         name: "Grey plover",
//     latinname: "Pluvialis squatarola",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Sociable lapwing",
//     latinname: "Vanellus gregarius",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-tailed lapwing",
//     latinname: "Vanellus leucurus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern lapwing",
//     latinname: "Vanellus vanellus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Great knot",
//     latinname: "Calidris tenuirostris",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red knot",
//     latinname: "Calidris canutus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Sanderling",
//     latinname: "Calidris alba",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Semipalmated sandpiper",
//     latinname: "Calidris pusilla",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Western sandpiper",
//     latinname: "Calidris mauri",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-necked stint",
//     latinname: "Calidris ruficollis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little stint",
//     latinname: "Calidris minuta",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Temminck's stint",
//     latinname: "Calidris temminckii",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant, occasional breeder"
//         },

//     {
//         name: "Long-toed stint",
//     latinname: "Calidris subminuta",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Least sandpiper",
//     latinname: "Calidris minutilla",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-rumped sandpiper",
//     latinname: "Calidris fuscicollis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Baird's sandpiper",
//     latinname: "Calidris bairdii",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pectoral sandpiper",
//     latinname: "Calidris melanotos",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Sharp-tailed sandpiper",
//     latinname: "Calidris acuminata",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Curlew sandpiper",
//     latinname: "Calidris ferruginea",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Stilt sandpiper",
//     latinname: "Calidris himantopus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Purple sandpiper",
//     latinname: "Calidris maritima",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant, occasional breeder"
//         },

//     {
//         name: "Dunlin",
//     latinname: "Calidris alpina",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant, scarce breeder"
//         },

//     {
//         name: "Broad-billed sandpiper",
//     latinname: "Calidris falcinellus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Buff-breasted sandpiper",
//     latinname: "Calidris subruficollis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Ruff (bird)",
//     latinname: "Calidris pugnax",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant and scarce breeding resident"
//         },

//     {
//         name: "Jack snipe",
//     latinname: "Lymnocryptes minimus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Common snipe",
//     latinname: "Gallinago gallinago",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species and summer visitor"
//         },

//     {
//         name: "Wilson's snipe",
//     latinname: "Gallinago delicata",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great snipe",
//     latinname: "Gallinago media",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Short-billed dowitcher",
//     latinname: "Limnodromus griseus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Long-billed dowitcher",
//     latinname: "Limnodromus scolopaceus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian woodcock",
//     latinname: "Scolopax rusticola",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Black-tailed godwit",
//     latinname: "Limosa limosa",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor, passage migrant and scarce summer breeding species"
//         },

//     {
//         name: "Hudsonian godwit",
//     latinname: "Limosa haemastica",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bar-tailed godwit",
//     latinname: "Limosa lapponica",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Little curlew",
//     latinname: "Numenius minutus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eskimo curlew",
//     latinname: "Numenius borealis",
//     family: "Sandpipers and allies",
//     status: "B",
//     comminality: "(extinct)"
//         },

//     {
//         name: "Hudsonian whimbrel",
//     latinname: "Numenius hudsonicus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian whimbrel",
//     latinname: "Numenius phaeopus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Eurasian curlew",
//     latinname: "Numenius arquata",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Upland sandpiper",
//     latinname: "Bartramia longicauda",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Terek sandpiper",
//     latinname: "Xenus cinereus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common sandpiper",
//     latinname: "Actitis hypoleucos",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Spotted sandpiper",
//     latinname: "Actitis macularius",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Green sandpiper",
//     latinname: "Tringa ochropus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant, occasional breeder"
//         },

//     {
//         name: "Solitary sandpiper",
//     latinname: "Tringa solitaria",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Grey-tailed tattler",
//     latinname: "Tringa brevipes",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Spotted redshank",
//     latinname: "Tringa erythropus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Greater yellowlegs",
//     latinname: "Tringa melanoleuca",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common greenshank",
//     latinname: "Tringa nebularia",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Lesser yellowlegs",
//     latinname: "Tringa flavipes",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Marsh sandpiper",
//     latinname: "Tringa stagnatilis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Wood sandpiper",
//     latinname: "Tringa glareola",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant & rare localised breeder in far North"
//         },

//     {
//         name: "Common redshank",
//     latinname: "Tringa totanus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Ruddy turnstone",
//     latinname: "Arenaria interpres",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Wilson's phalarope",
//     latinname: "Phalaropus tricolor",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-necked phalarope",
//     latinname: "Phalaropus lobatus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor: scarce & localised summer breeding in far North"
//         },

//     {
//         name: "Grey phalarope",
//     latinname: "Phalaropus fulicaria",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Pomarine skua",
//     latinname: "Stercorarius pomarinus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Arctic skua",
//     latinname: "Stercorarius parasiticus",
//     family: "Skuas",
//     status: "A",
//     comminality: "passage migrant and localised summer breeder"
//         },

//     {
//         name: "Long-tailed skua",
//     latinname: "Stercorarius longicaudus",
//     family: "Skuas",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Great skua",
//     latinname: "Stercorarius skua",
//     family: "Skuas",
//     status: "A",
//     comminality: "passage migrant and localised summer breeder"
//         },

//     {
//         name: "Ivory gull",
//     latinname: "Pagophila eburnea",
//     family: "Skuas",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sabine's gull",
//     latinname: "Xema sabini",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Black-legged kittiwake",
//     latinname: "Rissa tridactyla",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor and resident species"
//         },

//     {
//         name: "Slender-billed gull",
//     latinname: "Chroicocephalus genei",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bonaparte's gull",
//     latinname: "Chroicocephalus philadelphia",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-headed gull",
//     latinname: "Chroicocephalus ridibundus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Little gull",
//     latinname: "Hydrocoloeus minutus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "winter visitor, occasional breeder"
//         },

//     {
//         name: "Ross's gull",
//     latinname: "Rhodostethia rosea",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Laughing gull",
//     latinname: "Leucophaeus atricilla",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Franklin's gull",
//     latinname: "Leucophaeus pipixcan",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Mediterranean gull",
//     latinname: "Ichthyaetus melanocephalus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor, & resident in south."
//         },

//     {
//         name: "Audouin's gull",
//     latinname: "Ichthyaetus audouinii",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pallas's gull",
//     latinname: "Ichthyaetus ichthyaetus",
//     family: "Gulls, terns, and skimmers",
//     status: "B",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common gull",
//     latinname: "Larus canus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species, winter visitor & passage migrant"
//         },

//     {
//         name: "Ring-billed gull",
//     latinname: "Larus delawarensis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce winter visitor & passage migrant"
//         },

//     {
//         name: "Lesser black-backed gull",
//     latinname: "Larus fuscus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "European herring gull",
//     latinname: "Larus argentatus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Yellow-legged gull",
//     latinname: "Larus michahellis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "non-breeding late-summer visitor and passage migrant, has bred"
//         },

//     {
//         name: "Caspian gull",
//     latinname: "Larus cachinnans",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "American herring gull",
//     latinname: "Larus smithsonianus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Iceland gull",
//     latinname: "Larus glaucoides",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Slaty-backed gull",
//     latinname: "Larus schistisagus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Glaucous-winged gull",
//     latinname: "Larus glaucescens",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Glaucous gull",
//     latinname: "Larus hyperboreus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "winter visitor, has bred"
//         },

//     {
//         name: "Great black-backed gull",
//     latinname: "Larus marinus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Aleutian tern",
//     latinname: "Onychoprion aleutica",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sooty tern",
//     latinname: "Onychoprion fuscata",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bridled tern",
//     latinname: "Onychoprion anaethetus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little tern",
//     latinname: "Sternula albifrons",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Gull-billed tern",
//     latinname: "Gelochelidon nilotica",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant, has bred"
//         },

//     {
//         name: "Caspian tern",
//     latinname: "Hydroprogne caspia",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Whiskered tern",
//     latinname: "Chlidonias hybridus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black tern",
//     latinname: "Chlidonias niger",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "passage migrant, occasional breeder"
//         },

//     {
//         name: "White-winged tern",
//     latinname: "Chlidonias leucopterus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Cabot's tern",
//     latinname: "Thalasseus acuflavida",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Elegant tern",
//     latinname: "Thalasseus elegans",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sandwich tern",
//     latinname: "Thalasseus sandvicensis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Royal tern",
//     latinname: "Thalasseus maximus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lesser crested tern",
//     latinname: "Thalasseus bengalensis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Forster's tern",
//     latinname: "Sterna forsteri",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common tern",
//     latinname: "Sterna hirundo",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Roseate tern",
//     latinname: "Sterna dougallii",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce breeding summer visitor"
//         },

//     {
//         name: "Arctic tern",
//     latinname: "Sterna paradisaea",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common guillemot",
//     latinname: "Uria aalge",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor and resident species"
//         },

//     {
//         name: "Brunnich's guillemot",
//     latinname: "Uria lomvia",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Razorbill",
//     latinname: "Alca torda",
//     family: "Auks",
//     status: "A",
//     comminality: "breeding summer visitor and resident species"
//         },

//     {
//         name: "Great auk",
//     latinname: "Pinguinus impennis",
//     family: "Auks",
//     status: "B",
//     comminality: "(extinct)"
//         },

//     {
//         name: "Black guillemot",
//     latinname: "Cepphus grylle",
//     family: "Auks",
//     status: "A",
//     comminality: "resident localised breeding species"
//         },

//     {
//         name: "Long-billed murrelet",
//     latinname: "Brachyramphus perdix",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ancient murrelet",
//     latinname: "Synthliboramphus antiquus",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little auk",
//     latinname: "Alle alle",
//     family: "Auks",
//     status: "A",
//     comminality: "rare winter visitor"
//         },

//     {
//         name: "Atlantic puffin",
//     latinname: "Fratercula arctica",
//     family: "Auks",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Tufted puffin",
//     latinname: "Fratercula cirrhata",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pallas's sandgrouse",
//     latinname: "Syrrhaptes paradoxus",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant, has bred"
//         },

//     {
//         name: "Rock dove",
//     latinname: "Columba livia",
//     family: "Sandgrouse",
//     status: "A & C",
//     comminality: "Resident, most birds are of feral origin"
//         },

//     {
//         name: "Stock dove",
//     latinname: "Columba oenas",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common wood pigeon",
//     latinname: "Columba palumbus",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian collared dove",
//     latinname: "Streptopelia decaocto",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "European turtle dove",
//     latinname: "Streptopelia turtur",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Oriental turtle dove",
//     latinname: "Streptopelia orientalis",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Mourning dove",
//     latinname: "Zenaida macroura",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rose-ringed parakeet",
//     latinname: "Psittacula krameri",
//     family: "Pigeons and doves",
//     status: "C",
//     comminality: "resident introduced population"
//         },

//     {
//         name: "Great spotted cuckoo",
//     latinname: "Clamator glandarius",
//     family: "Parrots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common cuckoo",
//     latinname: "Cuculus canorus",
//     family: "Cuckoos",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Black-billed cuckoo",
//     latinname: "Coccyzus erythropthalmus",
//     family: "Cuckoos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-billed cuckoo",
//     latinname: "Coccyzus americanus",
//     family: "Cuckoos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Barn owl",
//     latinname: "Tyto alba",
//     family: "Owls",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian scops owl",
//     latinname: "Otus scops",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Snowy owl",
//     latinname: "Bubo scandiacus",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant, has bred Shetland Islands"
//         },

//     {
//         name: "Northern hawk-owl",
//     latinname: "Surnia ulula",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little owl",
//     latinname: "Athene noctua",
//     family: "Owls",
//     status: "C",
//     comminality: "resident introduced population"
//         },

//     {
//         name: "Tawny owl",
//     latinname: "Strix aluco",
//     family: "Owls",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Long-eared owl",
//     latinname: "Asio otus",
//     family: "Owls",
//     status: "A",
//     comminality: "scarce resident breeding species"
//         },

//     {
//         name: "Short-eared owl",
//     latinname: "Asio flammeus",
//     family: "Owls",
//     status: "A",
//     comminality: "resident breeding species or winter visitor"
//         },

//     {
//         name: "Tengmalm's owl",
//     latinname: "Aegolius funereus",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European nightjar",
//     latinname: "Caprimulgus europaeus",
//     family: "Nightjars",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Red-necked nightjar",
//     latinname: "Caprimulgus ruficollis",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Egyptian nightjar",
//     latinname: "Caprimulgus aegyptius",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common nighthawk",
//     latinname: "Chordeiles minor",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Chimney swift",
//     latinname: "Chaetura pelagica",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated needletail",
//     latinname: "Hirundapus caudacutus",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common swift",
//     latinname: "Apus apus",
//     family: "Swifts",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Pallid swift",
//     latinname: "Apus pallidus",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pacific swift",
//     latinname: "Apus pacificus",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Alpine swift",
//     latinname: "Apus melba",
//     family: "Swifts",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Little swift",
//     latinname: "Apus affinis",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-rumped swift",
//     latinname: "Apus caffer",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common kingfisher",
//     latinname: "Alcedo atthis",
//     family: "Swifts",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Belted kingfisher",
//     latinname: "Megaceryle alcyon",
//     family: "Kingfishers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blue-cheeked bee-eater",
//     latinname: "Merops persicus",
//     family: "Kingfishers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European bee-eater",
//     latinname: "Merops apiaster",
//     family: "Bee-eaters",
//     status: "A",
//     comminality: "scarce summer visitor - occasional breeder"
//         },

//     {
//         name: "European roller",
//     latinname: "Coracias garrulus",
//     family: "Bee-eaters",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Hoopoe",
//     latinname: "Upupa epops",
//     family: "Rollers",
//     status: "A",
//     comminality: "scarce summer visitor, occasional breeder"
//         },

//     {
//         name: "Eurasian wryneck",
//     latinname: "Jynx torquilla",
//     family: "Hoopoe",
//     status: "A",
//     comminality: "rare passage migrant, occasional breeder"
//         },

//     {
//         name: "European green woodpecker",
//     latinname: "Picus viridis",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Yellow-bellied sapsucker",
//     latinname: "Sphyrapicus varius",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great spotted woodpecker",
//     latinname: "Dendrocopos major",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Lesser spotted woodpecker",
//     latinname: "Dryobates minor",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eastern phoebe",
//     latinname: "Sayornis phoebe",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Acadian flycatcher",
//     latinname: "Empidonax virescens",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Alder flycatcher",
//     latinname: "Empidonax alnorum",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern kingbird",
//     latinname: "Tyrannus tyrannus",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-throated vireo",
//     latinname: "Vireo flavifrons",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Philadelphia vireo",
//     latinname: "Vireo philadelphicus",
//     family: "Vireos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-eyed vireo",
//     latinname: "Vireo olivaceus",
//     family: "Vireos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Golden oriole",
//     latinname: "Oriolus oriolus",
//     family: "Vireos",
//     status: "A",
//     comminality: "scarce breeding summer visitor"
//         },

//     {
//         name: "Brown shrike",
//     latinname: "Lanius cristatus", 
//     family: "Old World orioles",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Isabelline shrike",
//     latinname: "Lanius isabellinus",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-backed shrike",
//     latinname: "Lanius collurio",
//     family: "Shrikes",
//     status: "A",
//     comminality: "scarce passage migrant, occasional breeder"
//         },

//     {
//         name: "Long-tailed shrike",
//     latinname: "Lanius schach",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lesser grey shrike",
//     latinname: "Lanius minor",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great grey shrike",
//     latinname: "Lanius excubitor",
//     family: "Shrikes",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Southern grey shrike",
//     latinname: "Lanius meridionalis",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Woodchat shrike",
//     latinname: "Lanius senator",
//     family: "Shrikes",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Masked shrike",
//     latinname: "Lanius nubicus",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-billed chough",
//     latinname: "Pyrrhocorax pyrrhocorax",
//     family: "Shrikes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian magpie",
//     latinname: "Pica pica",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian jay",
//     latinname: "Garrulus glandarius",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Spotted nutcracker",
//     latinname: "Nucifraga caryocatactes",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Jackdaw",
//     latinname: "Coloeus monedula",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Rook (bird)",
//     latinname: "Corvus frugilegus",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Carrion crow",
//     latinname: "Corvus corone",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Hooded crow",
//     latinname: "Corvus cornix",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common raven",
//     latinname: "Corvus corax",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Goldcrest",
//     latinname: "Regulus regulus",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common firecrest",
//     latinname: "Regulus ignicapillus",
//     family: "Kinglets",
//     status: "A",
//     comminality: "scarce resident breeding species and passage migrant"
//         },

//     {
//         name: "European penduline tit",
//     latinname: "Remiz pendulinus",
//     family: "Kinglets",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian blue tit",
//     latinname: "Cyanistes caeruleus",
//     family: "Penduline tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Great tit",
//     latinname: "Parus major",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Crested tit",
//     latinname: "Lophophanes cristatus", 
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Coal tit",
//     latinname: "Periparus ater",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Willow tit",
//     latinname: "Poecile montana",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Marsh tit",
//     latinname: "Poecile palustris",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Bearded tit",
//     latinname: "Panurus biarmicus",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Calandra lark",
//     latinname: "Melanocorypha calandra",
//     family: "Bearded tit",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bimaculated lark",
//     latinname: "Melanocorypha bimaculata",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black lark",
//     latinname: "Melanocorypha yeltoniensis",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Greater short-toed lark",
//     latinname: "Calandrella brachydactyla",
//     family: "Larks",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Lesser short-toed lark",
//     latinname: "Alaudala rufescens",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Crested lark",
//     latinname: "Galerida cristata",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Woodlark",
//     latinname: "Lullula arborea",
//     family: "Larks",
//     status: "A",
//     comminality: "scarce resident breeding species and summer migrant"
//         },

//     {
//         name: "Eurasian skylark",
//     latinname: "Alauda arvensis",
//     family: "Larks",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "White-winged lark",
//     latinname: "Alauda leucoptera",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Shore lark",
//     latinname: "Eremophila alpestris",
//     family: "Larks",
//     status: "A",
//     comminality: "scarce winter visitor and passage migrant, occasional breeder"
//         },

//     {
//         name: "Sand martin",
//     latinname: "Riparia riparia",
//     family: "Larks",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Tree swallow",
//     latinname: "Tachycineta bicolor",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Purple martin",
//     latinname: "Progne subis",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian crag martin",
//     latinname: "Ptyonoprogne rupestris",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Barn swallow",
//     latinname: "Hirundo rustica",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common house martin",
//     latinname: "Delichon urbicum",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Red-rumped swallow",
//     latinname: "Cecropis daurica",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "American cliff swallow",
//     latinname: "Petrochelidon pyrrhonota",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Cetti's warbler",
//     latinname: "Cettia cetti",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Long-tailed tit",
//     latinname: "Aegithalos caudatus",
//     family: "Bush warblers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eastern crowned warbler",
//     latinname: "Phylloscopus coronatus",
//     family: "Long-tailed tits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Green warbler",
//     latinname: "Phylloscopus nitidus",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Greenish warbler",
//     latinname: "Phylloscopus trochiloides",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Pale-legged leaf warbler",
//     latinname: "Phylloscopus tenellipes",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Arctic warbler",
//     latinname: "Phylloscopus borealis",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Pallas's warbler",
//     latinname: "Phylloscopus proregulus",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Yellow-browed warbler",
//     latinname: "Phylloscopus inornatus",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Hume's warbler",
//     latinname: "Phylloscopus humei",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Radde's warbler",
//     latinname: "Phylloscopus schwarzi",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Dusky warbler",
//     latinname: "Phylloscopus fuscatus",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Western Bonelli's warbler",
//     latinname: "Phylloscopus bonelli",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Eastern Bonelli's warbler",
//     latinname: "Phylloscopus orientalis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Wood warbler",
//     latinname: "Phylloscopus sibilatrix",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common chiffchaff",
//     latinname: "Phylloscopus collybita",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Iberian chiffchaff",
//     latinname: "Phylloscopus ibericus",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Willow warbler",
//     latinname: "Phylloscopus trochilus",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Blackcap",
//     latinname: "Sylvia atricapilla",
//     family: "Warblers",
//     status: "A",
//     comminality: "resident breeding species & summer visitor"
//         },

//     {
//         name: "Garden warbler",
//     latinname: "Sylvia borin",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Barred warbler",
//     latinname: "Sylvia nisoria",
//     family: "Warblers",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Lesser whitethroat",
//     latinname: "Sylvia curruca",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Western Orphean warbler",
//     latinname: "Sylvia hortensis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern Orphean warbler",
//     latinname: "Sylvia Sylvia crassirostris",
//     family: "Warblers",
//     status: "A",
//     comminality: "very rare vagrant"
//         },

//     {
//         name: "Asian desert warbler",
//     latinname: "Sylvia nana",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Whitethroat",
//     latinname: "Sylvia communis",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Spectacled warbler",
//     latinname: "Sylvia conspicillata",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dartford warbler",
//     latinname: "Sylvia undata",
//     family: "Warblers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Marmora's warbler",
//     latinname: "Sylvia sarda",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rüppell's warbler",
//     latinname: "Sylvia ruppeli",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Subalpine warbler",
//     latinname: "Sylvia cantillans",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Moltoni's warbler",
//     latinname: "Sylvia subalpina",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sardinian warbler",
//     latinname: "Sylvia melanocephala",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pallas's grasshopper warbler",
//     latinname: "Helopsaltes certhiola",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lanceolated warbler",
//     latinname: "Locustella lanceolata",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common grasshopper warbler",
//     latinname: "Locustella naevia",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "River warbler",
//     latinname: "Locustella fluviatilis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Savi's warbler",
//     latinname: "Locustella luscinioides",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare breeding summer visitor"
//         },

//     {
//         name: "Thick-billed warbler",
//     latinname: "Arundinax aedon",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Booted warbler",
//     latinname: "Iduna caligata",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sykes's warbler",
//     latinname: "Iduna rama",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern olivaceous warbler",
//     latinname: "Iduna pallida",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Olive-tree warbler",
//     latinname: "Hippolais olivetorum",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Icterine warbler",
//     latinname: "Hippolais icterina",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Melodious warbler",
//     latinname: "Hippolais polyglotta",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Aquatic warbler",
//     latinname: "Acrocephalus paludicola",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Sedge warbler",
//     latinname: "Acrocephalus schoenobaenus",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Paddyfield warbler",
//     latinname: "Acrocephalus agricola",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blyth's reed warbler",
//     latinname: "Acrocephalus dumetorum",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Marsh warbler",
//     latinname: "Acrocephalus palustris",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Eurasian reed warbler",
//     latinname: "Acrocephalus scirpaceus",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Great reed warbler",
//     latinname: "Acrocephalus arundinaceus",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant, has bred"
//         },

//     {
//         name: "Zitting cisticola",
//     latinname: "Cisticola juncidis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Cedar waxwing",
//     latinname: "Bombycilla cedrorum",
//     family: "Cisticolas",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bohemian waxwing",
//     latinname: "Bombycilla garrulus",
//     family: "Waxwings",
//     status: "A",
//     comminality: "winter visitor in highly varied numbers."
//         },

//     {
//         name: "Wallcreeper",
//     latinname: "Tichodroma muraria",
//     family: "Waxwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-breasted nuthatch",
//     latinname: "Sitta canadensis",
//     family: "Wallcreeper",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian nuthatch",
//     latinname: "Sitta europaea",
//     family: "Nuthatches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common treecreeper",
//     latinname: "Certhia familiaris",
//     family: "Nuthatches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Short-toed treecreeper",
//     latinname: "Certhia brachydactyla",
//     family: "Treecreepers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian wren",
//     latinname: "Troglodytes troglodytes",
//     family: "Treecreepers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Northern mockingbird",
//     latinname: "Mimus polyglottos",
//     family: "Wrens",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Brown thrasher",
//     latinname: "Toxostoma rufum",
//     family: "Mockingbirds and allies",
//     status: "A",
//     comminality: "rare vagrant (one record)"
//         },

//     {
//         name: "Grey catbird",
//     latinname: "Dumetella carolinensis",
//     family: "Mockingbirds and allies",
//     status: "A",
//     comminality: "rare vagrant (one record)"
//         },

//     {
//         name: "Common starling",
//     latinname: "Sturnus vulgaris",
//     family: "Mockingbirds and allies",
//     status: "A",
//     comminality: "resident breeding species and winter visitor"
//         },

//     {
//         name: "Rosy starling",
//     latinname: "Pastor roseus",
//     family: "Starlings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated dipper",
//     latinname: "Cinclus cinclus",
//     family: "Starlings",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "White's thrush",
//     latinname: "Zoothera dauma",
//     family: "Dippers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Varied thrush",
//     latinname: "Ixoreus naevius",
//     family: "Thrushes",
//     status: "A",
//     comminality: "very rare vagrant (one record)"
//         },

//     {
//         name: "Wood thrush",
//     latinname: "Hylocichla mustelina",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Hermit thrush",
//     latinname: "Catharus guttatus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Swainson's thrush",
//     latinname: "Catharus ustulatus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Grey-cheeked thrush",
//     latinname: "Catharus minimus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Veery",
//     latinname: "Catharus fuscescens",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Siberian thrush",
//     latinname: "Geokichla sibirica",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ring ouzel",
//     latinname: "Turdus torquatus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common blackbird",
//     latinname: "Turdus merula",
//     family: "Thrushes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eyebrowed thrush",
//     latinname: "Turdus obscurus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dusky thrush",
//     latinname: "Turdus eunomus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Naumann's thrush",
//     latinname: "Turdus naumanni",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-throated thrush",
//     latinname: "Turdus atrogularis",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-throated thrush",
//     latinname: "Turdus ruficollis",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Fieldfare",
//     latinname: "Turdus pilaris",
//     family: "Thrushes",
//     status: "A",
//     comminality: "winter visitor, rare breeder"
//         },

//     {
//         name: "Song thrush",
//     latinname: "Turdus philomelos",
//     family: "Thrushes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Redwing",
//     latinname: "Turdus iliacus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "winter visitor, rare breeder"
//         },

//     {
//         name: "Mistle thrush",
//     latinname: "Turdus viscivorus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "American robin",
//     latinname: "Turdus migratorius",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rufous bush robin",
//     latinname: "Cercotrichas galactotes",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Asian brown flycatcher",
//     latinname: "Muscicapa dauurica",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Spotted flycatcher",
//     latinname: "Muscicapa striata",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "European robin",
//     latinname: "Erithacus rubecula",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Siberian blue robin",
//     latinname: "Larvivora cyanea",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rufous-tailed robin",
//     latinname: "Larvivora sibilans",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Siberian rubythroat",
//     latinname: "Calliope calliope",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated robin",
//     latinname: "Irania gutturalis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-flanked bluetail",
//     latinname: "Tarsiger cyanurus",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Thrush nightingale",
//     latinname: "Luscinia luscinia",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Nightingale",
//     latinname: "Luscinia megarhynchos",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Bluethroat",
//     latinname: "Luscinia svecica",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Red-breasted flycatcher",
//     latinname: "Ficedula parva",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Taiga flycatcher",
//     latinname: "Ficedula albicilla",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Collared flycatcher",
//     latinname: "Ficedula albicollis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European pied flycatcher",
//     latinname: "Ficedula hypoleuca",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Black redstart",
//     latinname: "Phoenicurus ochruros",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "scarce breeding resident, passage migrant & winter visitor"
//         },

//     {
//         name: "Common redstart",
//     latinname: "Phoenicurus phoenicurus",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Moussier's redstart",
//     latinname: "Phoenicurus moussieri",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common rock thrush",
//     latinname: "Monticola saxatilis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blue rock thrush",
//     latinname: "Monticola solitarius",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Whinchat",
//     latinname: "Saxicola rubetra",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor & passage migrant"
//         },

//     {
//         name: "Siberian stonechat",
//     latinname: "Saxicola maurus",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European stonechat",
//     latinname: "Saxicola rubicola",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Isabelline wheatear",
//     latinname: "Oenanthe isabellina",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern wheatear",
//     latinname: "Oenanthe oenanthe",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor & passage migrant"
//         },

//     {
//         name: "Pied wheatear",
//     latinname: "Oenanthe pleschanka",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-eared wheatear",
//     latinname: "Oenanthe hispanica",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Desert wheatear",
//     latinname: "Oenanthe deserti",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-crowned wheatear",
//     latinname: "Oenanthe leucopyga",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dunnock",
//     latinname: "Prunella modularis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Alpine accentor",
//     latinname: "Prunella collaris",
//     family: "Accentors",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Siberian accentor",
//     latinname: "Prunella montanella",
//     family: "Accentors",
//     status: "A",
//     comminality: "rare vagrant with multiple records in 2016"
//         },

//     {
//         name: "House sparrow",
//     latinname: "Passer domesticus",
//     family: "Accentors",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Spanish sparrow",
//     latinname: "Passer hispaniolensis",
//     family: "Sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian tree sparrow",
//     latinname: "Passer montanus",
//     family: "Sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Rock sparrow",
//     latinname: "Petronia petronia",
//     family: "Sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Western yellow wagtail",
//     latinname: "Motacilla flava",
//     family: "Sparrows",
//     status: "S",
//     comminality: "ven races including:"
//         },

//     {
//         name: "Citrine wagtail",
//     latinname: "Motacilla citreola",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Grey wagtail",
//     latinname: "Motacilla cinerea",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "White wagtail",
//     latinname: "Motacilla alba",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species with two additional visiting races"
//         },

//     {
//         name: "Richard's pipit",
//     latinname: "Anthus richardi",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Blyth's pipit",
//     latinname: "Anthus godlewskii",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Tawny pipit",
//     latinname: "Anthus campestris",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Olive-backed pipit",
//     latinname: "Anthus hodgsoni",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Tree pipit",
//     latinname: "Anthus trivialis",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Pechora pipit",
//     latinname: "Anthus gustavi",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Meadow pipit",
//     latinname: "Anthus pratensis",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Red-throated pipit",
//     latinname: "Anthus cervinus",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Eurasian rock pipit",
//     latinname: "Anthus petrosus",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Water pipit",
//     latinname: "Anthus spinoletta",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "winter visitor"
//         },

//     {
//         name: "Buff-bellied pipit",
//     latinname: "Anthus rubescens",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common chaffinch",
//     latinname: "Fringilla coelebs",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Brambling",
//     latinname: "Fringilla montifringilla",
//     family: "Finches",
//     status: "A",
//     comminality: "winter visitor, occasional breeder"
//         },

//     {
//         name: "European serin",
//     latinname: "Serinus serinus",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce passage migrant, occasional breeder"
//         },

//     {
//         name: "European greenfinch",
//     latinname: "Chloris chloris",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Citril finch",
//     latinname: "Carduelis citrinella",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European goldfinch",
//     latinname: "Carduelis carduelis",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian linnet",
//     latinname: "Linaria cannabina",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Twite",
//     latinname: "Linaria flavirostris",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian siskin",
//     latinname: "Spinus spinus",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species and winter visitor"
//         },

//     {
//         name: "Lesser redpoll",
//     latinname: "Acanthis cabaret",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Mealy redpoll",
//     latinname: "Acanthis flammea",
//     family: "Finches",
//     status: "A",
//     comminality: "winter visitor and passage migrant, occasional breeder"
//         },

//     {
//         name: "Arctic redpoll",
//     latinname: "Acanthis hornemanni",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Two-barred crossbill",
//     latinname: "Loxia leucoptera",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common crossbill",
//     latinname: "Loxia curvirostra",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Scottish crossbill",
//     latinname: "Loxia scotica",
//     family: "Finches",
//     status: "A",
//     comminality: "resident endemic breeding species"
//         },

//     {
//         name: "Parrot crossbill",
//     latinname: "Loxia pytyopsittacus",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Trumpeter finch",
//     latinname: "Bucanetes githagineus",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common rosefinch",
//     latinname: "Erythrina erythrinus",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Pine grosbeak",
//     latinname: "Pinicola enucleator",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian bullfinch",
//     latinname: "Pyrrhula pyrrhula",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Hawfinch",
//     latinname: "Coccothraustes coccothraustes",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce resident breeding species"
//         },

//     {
//         name: "Evening grosbeak",
//     latinname: "Hesperiphona vespertinua",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Snow bunting",
//     latinname: "Plectrophenax nivalis",
//     family: "Finches",
//     status: "A",
//     comminality: "winter visitor & scarce breeder"
//         },

//     {
//         name: "Lapland bunting",
//     latinname: "Calcarius lapponicus",
//     family: "Longspurs",
//     status: "A",
//     comminality: "winter visitor, occasional breeder"
//         },

//     {
//         name: "Summer tanager",
//     latinname: "Piranga rubra",
//     family: "Longspurs",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Scarlet tanager",
//     latinname: "Piranga olivacea",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rose-breasted grosbeak",
//     latinname: "Pheucticus ludovicianus",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Indigo bunting",
//     latinname: "Passerina cyanea",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern towhee",
//     latinname: "Pipilo erythrophthalmus",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lark sparrow",
//     latinname: "Chondestes grammacus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Savannah sparrow",
//     latinname: "Passerculus sandwichensis",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Song sparrow",
//     latinname: "Melospiza melodia",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-crowned sparrow",
//     latinname: "Zonotrichia leucophrys",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated sparrow",
//     latinname: "Zonotrichia albicollis",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dark-eyed junco",
//     latinname: "junco hyemalis",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-faced bunting",
//     latinname: "Emberiza spodocephala",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pine bunting",
//     latinname: "Emberiza leucocephalos",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellowhammer",
//     latinname: "Emberiza citrinella",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Cirl bunting",
//     latinname: "Emberiza cirlus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Rock bunting",
//     latinname: "Emberiza cia",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ortolan bunting",
//     latinname: "Emberiza hortulana",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Cretzschmar's bunting",
//     latinname: "Emberiza caesia",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-browed bunting",
//     latinname: "Emberiza chrysophrys",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rustic bunting",
//     latinname: "Emberiza rustica",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Chestnut-eared bunting",
//     latinname: "Emberiza fucata",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little bunting",
//     latinname: "Emberiza pusilla",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Yellow-breasted bunting",
//     latinname: "Emberiza aureola",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Chestnut bunting",
//     latinname: "Emberiza rutila",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Reed bunting",
//     latinname: "Emberiza schoeniclus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Pallas' reed bunting",
//     latinname: "Emberiza pallasi",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-headed bunting",
//     latinname: "Emberiza melanocephala",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Corn bunting",
//     latinname: "Emberiza calandra",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Bobolink",
//     latinname: "Dolichonyx oryzivorus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Brown-headed cowbird",
//     latinname: "Molothrus ater",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Baltimore oriole",
//     latinname: "Icterus galbula",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-winged blackbird",
//     latinname: "Agelaius phoeniceus",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ovenbird",
//     latinname: "Seiurus aurocapilla",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern waterthrush",
//     latinname: "Parkesia noveboracensis",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Golden-winged warbler",
//     latinname: "Vermivora chrysoptera",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-and-white warbler",
//     latinname: "Mniotilta varia",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Tennessee warbler",
//     latinname: "Oreothlypis peregrina",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common yellowthroat",
//     latinname: "Geothlypis trichas",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Hooded warbler",
//     latinname: "Setophaga citrina",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "American redstart",
//     latinname: "Setophaga ruticilla",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Cape May warbler",
//     latinname: "Setophaga tigrina",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern parula",
//     latinname: "Setophaga americana",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Magnolia warbler",
//     latinname: "Setophaga magnolia",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bay-breasted warbler",
//     latinname: "Setophaga castanea",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blackburnian warbler",
//     latinname: "Setophaga fusca",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow warbler",
//     latinname: "Setophaga petechia",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Chestnut-sided warbler",
//     latinname: "Setophaga pensylvanica",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blackpoll warbler",
//     latinname: "Setophaga striata",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-rumped warbler",
//     latinname: "Setophaga coronata",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Wilson's warbler",
//     latinname: "Cardellina pusilla",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Brown booby",
//     latinname: "Sula leucogaster",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"}
// ])

// {
//         name: "Brant goose",
//         latinname: "Branta bernicla",
//         family: "Ducks, geese and swans",
//         status: "A",
//         comminality: "winter visitor"
//     },

//     {
//         name: "Red-breasted goose",
//     latinname: "Branta ruficollis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Canada goose",
//     latinname: "Branta canadensis",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident introduced population, some wild vagrants"
//     },

//     {
//         name: "Barnacle goose",
//     latinname: "Branta leucopsis",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "winter visitor and resident introduced population"
//     },

//     {
//         name: "Cackling goose",
//     latinname: "Branta hutchinsii",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Snow goose",
//     latinname: "Anser caerulescens",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident introduced population, some wild vagrants"
//     },

//     {
//         name: "Greylag goose",
//     latinname: "Anser anser",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident wild and feral populations, winter visitor"
//     },

//     {
//         name: "Taiga bean goose",
//     latinname: "Anser fabalis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Pink-footed goose",
//     latinname: "Anser brachyrhynchus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Tundra bean goose",
//     latinname: "Anser serrirostris",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Greater white-fronted goose",
//     latinname: "Anser albifrons",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Lesser white-fronted goose",
//     latinname: "Anser erythropus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Mute swan",
//     latinname: "Cygnus olor",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Tundra swan",
//     latinname: "Cygnus columbianus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Whooper swan",
//     latinname: "Cygnus cygnus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor and occasional breeder"
//     },

//     {
//         name: "Egyptian goose",
//     latinname: "Alopochen aegyptiaca",
//     family: "Ducks, geese and swans",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Ruddy shelduck",
//     latinname: "Tadorna ferruginea",
//     family: "Ducks, geese and swans",
//     status: "B",
//     comminality: "Records since 1946 are presumed escapes from captivity"
//     },

//     {
//         name: "Common shelduck",
//     latinname: "Tadorna tadorna",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Mandarin duck",
//     latinname: "Aix galericulata",
//     family: "Ducks, geese and swans",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Baikal teal",
//     latinname: "Sibirionetta formosa",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Garganey",
//     latinname: "Spatula querquedula",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Blue-winged teal",
//     latinname: "Spatula discors",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern shoveler",
//     latinname: "Spatula clypeata",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Gadwall",
//     latinname: "Mareca strepera",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Falcated duck",
//     latinname: "Mareca falcata",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Eurasian wigeon",
//     latinname: "Mareca penelope",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "American wigeon",
//     latinname: "Mareca americana",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Mallard",
//     latinname: "Anas platyrhynchos",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "resident breeder, winter visitor and naturalised releases"
//     },

//     {
//         name: "American black duck",
//     latinname: "Anas rubripes",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern pintail",
//     latinname: "Anas acuta",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Common teal",
//     latinname: "Anas crecca",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Green-winged teal",
//     latinname: "Anas carolinensis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Red-crested pochard",
//     latinname: "Netta rufina",
//     family: "Ducks, geese and swans",
//     status: "A & C",
//     comminality: "scarce migrant and introduced breeder"
//     },

//     {
//         name: "Canvasback",
//     latinname: "Aythya valisineria",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Redhead (duck)",
//     latinname: "Aythya americana",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common pochard",
//     latinname: "Aythya ferina",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Ferruginous duck",
//     latinname: "Aythya nyroca",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Ring-necked duck",
//     latinname: "Aythya collaris",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Tufted duck",
//     latinname: "Aythya fuligula",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Greater scaup",
//     latinname: "Aythya marila",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor and occasional breeder"
//     },

//     {
//         name: "Lesser scaup",
//     latinname: "Aythya affinis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Steller's eider",
//     latinname: "Polysticta stelleri",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "King eider",
//     latinname: "Somateria spectabilis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common eider",
//     latinname: "Somateria mollissima",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Harlequin duck",
//     latinname: "Histrionicus histrionicus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Surf scoter",
//     latinname: "Melanitta perspicillata",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Velvet scoter",
//     latinname: "Melanitta fusca",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "White-winged scoter",
//     latinname: "Melanitta deglandi",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common scoter",
//     latinname: "Melanitta nigra",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Black scoter",
//     latinname: "Melanitta americana",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Long-tailed duck",
//     latinname: "Clangula hyemalis",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor and occasional breeder"
//     },

//     {
//         name: "Bufflehead",
//     latinname: "Bucephala albeola",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common goldeneye",
//     latinname: "Bucephala clangula",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Barrow's goldeneye",
//     latinname: "Bucephala islandica",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Smew",
//     latinname: "Mergellus albellus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Hooded merganser",
//     latinname: "Lophodytes cucullatus",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common merganser",
//     latinname: "Mergus merganser",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Red-breasted merganser",
//     latinname: "Mergus serrator",
//     family: "Ducks, geese and swans",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Ruddy duck",
//     latinname: "Oxyura jamaicensis",
//     family: "Ducks, geese and swans",
//     status: "C",
//     comminality: " introduced species currently subject to an eradication programme"
//     },

//     {
//         name: "Red grouse",
//     latinname: "Lagopus lagopus scotica",
//     family: "Grouse",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Rock ptarmigan",
//     latinname: "Lagopus muta",
//     family: "Grouse",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Black grouse",
//     latinname: "Tetrao tetrix",
//     family: "Grouse",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Western capercaillie",
//     latinname: "Tetrao urogallus",
//     family: "Grouse",
//     status: "C",
//     comminality: "resident reintroduced population"
//     },

//     {
//         name: "Red-legged partridge",
//     latinname: "Alectoris rufa",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Grey partridge",
//     latinname: "Perdix perdix",
//     family: "Pheasants, partridges and quail",
//     status: "A & C",
//     comminality: "resident breeder and introduced gamebird"
//     },

//     {
//         name: "Common quail",
//     latinname: "Coturnix coturnix",
//     family: "Pheasants, partridges and quail",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Common pheasant",
//     latinname: "Phasianus colchicus",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Golden pheasant",
//     latinname: "Chrysolophus pictus",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "resident introduced population"
//     },

//     {
//         name: "Lady Amherst's pheasant",
//     latinname: "Chrysolophus amherstiae",
//     family: "Pheasants, partridges and quail",
//     status: "C",
//     comminality: "introduced population now extinct"
//     },

//     {
//         name: "Red-throated loon",
//     latinname: "Gavia stellata",
//     family: "Divers",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Black-throated loon",
//     latinname: "Gavia arctica",
//     family: "Divers",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Pacific loon",
//     latinname: "Gavia pacifica",
//     family: "Divers",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common loon",
//     latinname: "Gavia immer",
//     family: "Divers",
//     status: "A",
//     comminality: "winter visitor, has bred"
//     },

//     {
//         name: "Yellow-billed loon",
//     latinname: "Gavia adamsii",
//     family: "Divers",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Black-browed albatross",
//     latinname: "Thalassarche melanophris",
//     family: "Albatrosses",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Atlantic yellow-nosed albatross",
//     latinname: "Thalassarche chlororhynchos",
//     family: "Albatrosses",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern fulmar",
//     latinname: "Fulmarus glacialis",
//     family: "Petrels",
//     status: "A",
//     comminality: "resident and migrant breeder, passage migrant"
//     },

//     {
//         name: "Fea's petrel",
//     latinname: "Pterodroma feae",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Black-capped petrel",
//     latinname: "Pterodroma hasitata",
//     family: "Petrels",
//     status: "B",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Cory's shearwater",
//     latinname: "Calonectris borealis",
//     family: "Petrels",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Scopoli's shearwater",
//     latinname: "Calonectris diomedea",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Great shearwater",
//     latinname: "Ardenna gravis",
//     family: "Petrels",
//     status: "A",
//     comminality: "passage migrant"
//     },

//     {
//         name: "Sooty shearwater",
//     latinname: "Ardenna grisea",
//     family: "Petrels",
//     status: "A",
//     comminality: "passage migrant"
//     },

//     {
//         name: "Manx shearwater",
//     latinname: "Puffinus puffinus",
//     family: "Petrels",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Yelkouan shearwater",
//     latinname: "Puffinus yelkouan",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Balearic shearwater",
//     latinname: "Puffinus mauretanicus",
//     family: "Petrels",
//     status: "A",
//     comminality: "passage migrant"
//     },

//     {
//         name: "Barolo shearwater",
//     latinname: "Puffinus baroli",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Wilson's storm petrel",
//     latinname: "Oceanites oceanicus",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant, more regularly seen well offshore"
//     },

//     {
//         name: "White-faced storm petrel",
//     latinname: "Pelagodroma marina",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "European storm petrel",
//     latinname: "Hydrobates pelagicus",
//     family: "Petrels",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Leach's storm petrel",
//     latinname: "Oceanodroma leucorhea",
//     family: "Petrels",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Swinhoe's storm petrel",
//     latinname: "Oceanodroma monorhis",
//     family: "Petrels",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Red-billed tropicbird",
//     latinname: "Phaethon aethereus",
//     family: "Tropicbirds",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Northern gannet",
//     latinname: "Morus bassanus",
//     family: "Gannets and boobies",
//     status: "A",
//     comminality: "breeding summer visitor and passage migrant"
//     },

//     {
//         name: "Red-footed booby",
//     latinname: "Sula sula",
//     family: "Gannets and boobies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Great cormorant",
//     latinname: "Phalacrocorax carbo",
//     family: "Cormorants",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Double-crested cormorant",
//     latinname: "Phalacrocorax auritus",
//     family: "Cormorants",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "European shag",
//     latinname: "Phalacrocorax aristotelis",
//     family: "Cormorants",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Magnificent frigatebird",
//     latinname: "Fregata magnificens",
//     family: "Frigatebirds",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Ascension frigatebird",
//     latinname: "Fregata aquila",
//     family: "Frigatebirds",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Dalmatian pelican",
//     latinname: "Pelecanus crispus",
//     family: "Pelicans",
//     status: "A",
//     comminality: "very rare migrant"
//     },
// //CODE IS BROKEN HERE I THINK
//     {
//         name: "Great bittern",
//     latinname: "Botaurus stellaris",
//     family: "Pelicans",
//     status: "A",
//     comminality: "resident breeding species and winter migrant"
//     },

//     {
//         name: "American bittern",
//     latinname: "Botaurus lentiginosus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Little bittern",
//     latinname: "Ixobrychus minutus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce migrant, recently bred"
//     },

//     {
//         name: "Black-crowned night heron",
//     latinname: "Nycticorax nycticorax",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce migrant, has bred"
//     },

//     {
//         name: "Green heron",
//     latinname: "Butorides virescens",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Squacco heron",
//     latinname: "Ardeola ralloides",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Chinese pond heron",
//     latinname: "Ardeola bacchus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Cattle egret",
//     latinname: "Bubulcus ibis",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce but increasing resident, recently bred"
//     },

//     {
//         name: "Little egret",
//     latinname: "Egretta garzetta",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//     },

//     {
//         name: "Snowy egret",
//     latinname: "Egretta thula",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Great egret",
//     latinname: "Ardea alba",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "resident breeding species, first bred 2012"
//     },

//     {
//         name: "Grey heron",
//     latinname: "Ardea cinerea",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "resident breeding species and winter migrant"
//     },

//     {
//         name: "Great blue heron",
//     latinname: "Ardea herodias",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Purple heron",
//     latinname: "Ardea purpurea",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "scarce migrant, recently bred"
//     },

//     {
//         name: "Glossy ibis",
//     latinname: "Plegadis falcinellus",
//     family: "Bitterns, herons and egrets",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common spoonbill",
//     latinname: "Platalea leucorodia",
//     family: "Ibises and spoonbills",
//     status: "A",
//     comminality: "scarce migrant, recently bred"
//     },

//     {
//         name: "Black stork",
//     latinname: "Ciconia nigra",
//     family: "Ibises and spoonbills",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "White stork",
//     latinname: "Ciconia ciconia",
//     family: "Storks",
//     status: "A",
//     comminality: "scarce migrant, formerly bred"
//     },

//     {
//         name: "Pied-billed grebe",
//     latinname: "Podilymbus podiceps",
//     family: "Storks",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Little grebe",
//     latinname: "Tachybaptus ruficollis",
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Great crested grebe",
//     latinname: "Podiceps crstatus", 
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Red-necked grebe",
//     latinname: "Podiceps grisegena",
//     family: "Grebes",
//     status: "A",
//     comminality: "winter visitor, has bred"
//     },

//     {
//         name: "Horned grebe",
//     latinname: "Podiceps auritus",
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "Black-necked grebe",
//     latinname: "Podiceps nigricollis",
//     family: "Grebes",
//     status: "A",
//     comminality: "resident breeder and winter visitor"
//     },

//     {
//         name: "European honey buzzard",
//     latinname: "Pernis apivorus",
//     family: "Grebes",
//     status: "A",
//     comminality: "breeding summer visitor and passage migrant"
//     },

//     {
//         name: "Black kite",
//     latinname: "Milvus migrans",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "scarce migrant"
//     },

//     {
//         name: "Red kite",
//     latinname: "Milvus milvus",
//     family: "Buzzards, kites and allies",
//     status: "A & C",
//     comminality: "resident breeder and widespread introductions"
//     },

//     {
//         name: "White-tailed eagle",
//     latinname: "Haliaeetus albicilla",
//     family: "Buzzards, kites and allies",
//     status: "A & C",
//     comminality: "resident breeder and widespread introductions"
//     },

//     {
//         name: "Egyptian vulture",
//     latinname: "Neophron percnopterus",
//     family: "Buzzards, kites and allies",
//     status: "B",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Short-toed snake eagle",
//     latinname: "Circaetus gallicus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Western marsh harrier",
//     latinname: "Circus aeruginosus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder and passage migrant"
//     },

//     {
//         name: "Hen harrier",
//     latinname: "Circus cyaneus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder, winter visitor and passage migrant"
//     },

//     {
//         name: "Pallid harrier",
//     latinname: "Circus macrourus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Montagu's harrier",
//     latinname: "Circus pygargus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "breeding summer visitor and passage migrant"
//     },

//     {
//         name: "Northern goshawk",
//     latinname: "Accipiter gentilis",
//     family: "Buzzards, kites and allies",
//     status: "A & C",
//     comminality: "resident breeder and naturalised escapes"
//     },

//     {
//         name: "Eurasian sparrowhawk",
//     latinname: "Accipiter nisus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder and passage migrant"
//     },

//     {
//         name: "Common buzzard",
//     latinname: "Buteo buteo",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeder and passage migrant"
//     },

//     {
//         name: "Rough-legged buzzard",
//     latinname: "Buteo lagopus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "winter visitor"
//     },

//     {
//         name: "Greater spotted eagle",
//     latinname: "Clanga clanga",
//     family: "Buzzards, kites and allies",
//     status: "B",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Golden eagle",
//     latinname: "Aquila chrysaetos",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "Osprey",
//     latinname: "Pandion haliaetus",
//     family: "Buzzards, kites and allies",
//     status: "A",
//     comminality: "breeding summer visitor"
//     },

//     {
//         name: "Lesser kestrel",
//     latinname: "Falco naumanni",
//     family: "Osprey",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common kestrel",
//     latinname: "Falco tinnunculus",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//     },

//     {
//         name: "American kestrel",
//     latinname: "Falco sparverius",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-footed falcon",
//     latinname: "Falco vespertinus",
//     family: "Falcons",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Amur falcon",
//     latinname: "Falco amurensis",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Merlin (bird)",
//     latinname: "Falco columbarius",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian hobby",
//     latinname: "Falco subbuteo",
//     family: "Falcons",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Eleonora's falcon",
//     latinname: "Falco eleonorae",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Gyr falcon",
//     latinname: "Falco rusticolus",
//     family: "Falcons",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Peregrine falcon",
//     latinname: "Falco peregrinus",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Water rail",
//     latinname: "Rallus aquaticus",
//     family: "Falcons",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Spotted crake",
//     latinname: "Porzana porzana",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "scarce breeding summer visitor"
//         },

//     {
//         name: "Sora (bird)",
//     latinname: "Porzana carolina",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little crake",
//     latinname: "Porzana parva",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Baillon's crake",
//     latinname: "Porzana pusilla",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant, formerly bred"
//         },

//     {
//         name: "Corn crake",
//     latinname: "Crex crex",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common moorhen",
//     latinname: "Gallinula chloropus",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Western swamphen",
//     latinname: "Porphyrio porphyrio",
//     family: "Rails, crakes and coots",
//     status: "O",
//     comminality: "e record"
//         },

//     {
//         name: "Allen's gallinule",
//     latinname: "Porphyrio alleni",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "American purple gallinule",
//     latinname: "Porphyrio martinicus",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian coot",
//     latinname: "Fulica atra",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "American coot",
//     latinname: "Fulica americana",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common crane",
//     latinname: "Grus grus",
//     family: "Rails, crakes and coots",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Sandhill crane",
//     latinname: "Grus canadensis",
//     family: "Cranes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little bustard",
//     latinname: "Tetrax tetrax",
//     family: "Cranes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Macqueen's bustard",
//     latinname: "Chlamydotis macqueenii",
//     family: "Bustards",
//     status: "B",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great bustard",
//     latinname: "Otis tarda",
//     family: "Bustards",
//     status: "A",
//     comminality: "rare vagrant and recently reintroduced breeding resident species"
//         },

//     {
//         name: "Eurasian oystercatcher",
//     latinname: "Haematopus ostralegus",
//     family: "Bustards",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Black-winged stilt",
//     latinname: "Himantopus himantopus",
//     family: "Oystercatchers",
//     status: "A",
//     comminality: "rare vagrant and occasional breeder"
//         },

//     {
//         name: "Pied avocet",
//     latinname: "Recurvirostra avosetta",
//     family: "Avocets and stilts",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian stone-curlew",
//     latinname: "Burhinus oedicnemus",
//     family: "Avocets and stilts",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Cream-colored courser",
//     latinname: "Cursorius cursor",
//     family: "Thick-knees",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Collared pratincole",
//     latinname: "Glareola pratincola",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Oriental pratincole",
//     latinname: "Glareola maldivarum",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-winged pratincole",
//     latinname: "Glareola nordmanni",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little ringed plover",
//     latinname: "Charadrius dubius",
//     family: "Pratincoles and coursers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Ringed plover",
//     latinname: "Charadrius hiaticula",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "resident breeding species and summer visitor"
//         },

//     {
//         name: "Semipalmated plover",
//     latinname: "Charadrius semipalmatus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Killdeer",
//     latinname: "Charadrius vociferus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Kentish plover",
//     latinname: "Charadrius alexandrinus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "former breeder, now a rare vagrant."
//         },

//     {
//         name: "Lesser sand plover",
//     latinname: "Charadrius mongolus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Greater sand plover",
//     latinname: "Charadrius leschenaultii",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Caspian plover",
//     latinname: "Charadrius asiaticus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian dotterel",
//     latinname: "Charadrius morinellus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "American golden plover",
//     latinname: "Pluvialis dominica",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Pacific golden plover",
//     latinname: "Pluvialis fulva",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European golden plover",
//     latinname: "Pluvialis apricaria",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "winter visitor and passage migrant, scarce breeder"
//         },

//     {
//         name: "Grey plover",
//     latinname: "Pluvialis squatarola",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Sociable lapwing",
//     latinname: "Vanellus gregarius",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-tailed lapwing",
//     latinname: "Vanellus leucurus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern lapwing",
//     latinname: "Vanellus vanellus",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Great knot",
//     latinname: "Calidris tenuirostris",
//     family: "Plovers and lapwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red knot",
//     latinname: "Calidris canutus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Sanderling",
//     latinname: "Calidris alba",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Semipalmated sandpiper",
//     latinname: "Calidris pusilla",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Western sandpiper",
//     latinname: "Calidris mauri",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-necked stint",
//     latinname: "Calidris ruficollis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little stint",
//     latinname: "Calidris minuta",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Temminck's stint",
//     latinname: "Calidris temminckii",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant, occasional breeder"
//         },

//     {
//         name: "Long-toed stint",
//     latinname: "Calidris subminuta",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Least sandpiper",
//     latinname: "Calidris minutilla",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-rumped sandpiper",
//     latinname: "Calidris fuscicollis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Baird's sandpiper",
//     latinname: "Calidris bairdii",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pectoral sandpiper",
//     latinname: "Calidris melanotos",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Sharp-tailed sandpiper",
//     latinname: "Calidris acuminata",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Curlew sandpiper",
//     latinname: "Calidris ferruginea",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Stilt sandpiper",
//     latinname: "Calidris himantopus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Purple sandpiper",
//     latinname: "Calidris maritima",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant, occasional breeder"
//         },

//     {
//         name: "Dunlin",
//     latinname: "Calidris alpina",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant, scarce breeder"
//         },

//     {
//         name: "Broad-billed sandpiper",
//     latinname: "Calidris falcinellus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Buff-breasted sandpiper",
//     latinname: "Calidris subruficollis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Ruff (bird)",
//     latinname: "Calidris pugnax",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant and scarce breeding resident"
//         },

//     {
//         name: "Jack snipe",
//     latinname: "Lymnocryptes minimus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Common snipe",
//     latinname: "Gallinago gallinago",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species and summer visitor"
//         },

//     {
//         name: "Wilson's snipe",
//     latinname: "Gallinago delicata",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great snipe",
//     latinname: "Gallinago media",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Short-billed dowitcher",
//     latinname: "Limnodromus griseus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Long-billed dowitcher",
//     latinname: "Limnodromus scolopaceus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian woodcock",
//     latinname: "Scolopax rusticola",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Black-tailed godwit",
//     latinname: "Limosa limosa",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor, passage migrant and scarce summer breeding species"
//         },

//     {
//         name: "Hudsonian godwit",
//     latinname: "Limosa haemastica",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bar-tailed godwit",
//     latinname: "Limosa lapponica",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant"
//         },

//     {
//         name: "Little curlew",
//     latinname: "Numenius minutus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eskimo curlew",
//     latinname: "Numenius borealis",
//     family: "Sandpipers and allies",
//     status: "B",
//     comminality: "(extinct)"
//         },

//     {
//         name: "Hudsonian whimbrel",
//     latinname: "Numenius hudsonicus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian whimbrel",
//     latinname: "Numenius phaeopus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Eurasian curlew",
//     latinname: "Numenius arquata",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Upland sandpiper",
//     latinname: "Bartramia longicauda",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Terek sandpiper",
//     latinname: "Xenus cinereus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common sandpiper",
//     latinname: "Actitis hypoleucos",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Spotted sandpiper",
//     latinname: "Actitis macularius",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Green sandpiper",
//     latinname: "Tringa ochropus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor & passage migrant, occasional breeder"
//         },

//     {
//         name: "Solitary sandpiper",
//     latinname: "Tringa solitaria",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Grey-tailed tattler",
//     latinname: "Tringa brevipes",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Spotted redshank",
//     latinname: "Tringa erythropus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor and passage migrant"
//         },

//     {
//         name: "Greater yellowlegs",
//     latinname: "Tringa melanoleuca",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//     },

//     {
//         name: "Common greenshank",
//     latinname: "Tringa nebularia",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Lesser yellowlegs",
//     latinname: "Tringa flavipes",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Marsh sandpiper",
//     latinname: "Tringa stagnatilis",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Wood sandpiper",
//     latinname: "Tringa glareola",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant & rare localised breeder in far North"
//         },

//     {
//         name: "Common redshank",
//     latinname: "Tringa totanus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Ruddy turnstone",
//     latinname: "Arenaria interpres",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Wilson's phalarope",
//     latinname: "Phalaropus tricolor",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-necked phalarope",
//     latinname: "Phalaropus lobatus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "winter visitor: scarce & localised summer breeding in far North"
//         },

//     {
//         name: "Grey phalarope",
//     latinname: "Phalaropus fulicaria",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Pomarine skua",
//     latinname: "Stercorarius pomarinus",
//     family: "Sandpipers and allies",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Arctic skua",
//     latinname: "Stercorarius parasiticus",
//     family: "Skuas",
//     status: "A",
//     comminality: "passage migrant and localised summer breeder"
//         },

//     {
//         name: "Long-tailed skua",
//     latinname: "Stercorarius longicaudus",
//     family: "Skuas",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Great skua",
//     latinname: "Stercorarius skua",
//     family: "Skuas",
//     status: "A",
//     comminality: "passage migrant and localised summer breeder"
//         },

//     {
//         name: "Ivory gull",
//     latinname: "Pagophila eburnea",
//     family: "Skuas",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sabine's gull",
//     latinname: "Xema sabini",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Black-legged kittiwake",
//     latinname: "Rissa tridactyla",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor and resident species"
//         },

//     {
//         name: "Slender-billed gull",
//     latinname: "Chroicocephalus genei",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bonaparte's gull",
//     latinname: "Chroicocephalus philadelphia",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-headed gull",
//     latinname: "Chroicocephalus ridibundus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Little gull",
//     latinname: "Hydrocoloeus minutus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "winter visitor, occasional breeder"
//         },

//     {
//         name: "Ross's gull",
//     latinname: "Rhodostethia rosea",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Laughing gull",
//     latinname: "Leucophaeus atricilla",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Franklin's gull",
//     latinname: "Leucophaeus pipixcan",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Mediterranean gull",
//     latinname: "Ichthyaetus melanocephalus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor, & resident in south."
//         },

//     {
//         name: "Audouin's gull",
//     latinname: "Ichthyaetus audouinii",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pallas's gull",
//     latinname: "Ichthyaetus ichthyaetus",
//     family: "Gulls, terns, and skimmers",
//     status: "B",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common gull",
//     latinname: "Larus canus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species, winter visitor & passage migrant"
//         },

//     {
//         name: "Ring-billed gull",
//     latinname: "Larus delawarensis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce winter visitor & passage migrant"
//         },

//     {
//         name: "Lesser black-backed gull",
//     latinname: "Larus fuscus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "European herring gull",
//     latinname: "Larus argentatus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Yellow-legged gull",
//     latinname: "Larus michahellis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "non-breeding late-summer visitor and passage migrant, has bred"
//         },

//     {
//         name: "Caspian gull",
//     latinname: "Larus cachinnans",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "American herring gull",
//     latinname: "Larus smithsonianus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Iceland gull",
//     latinname: "Larus glaucoides",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Slaty-backed gull",
//     latinname: "Larus schistisagus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Glaucous-winged gull",
//     latinname: "Larus glaucescens",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Glaucous gull",
//     latinname: "Larus hyperboreus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "winter visitor, has bred"
//         },

//     {
//         name: "Great black-backed gull",
//     latinname: "Larus marinus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "resident breeding species and passage migrant"
//         },

//     {
//         name: "Aleutian tern",
//     latinname: "Onychoprion aleutica",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sooty tern",
//     latinname: "Onychoprion fuscata",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bridled tern",
//     latinname: "Onychoprion anaethetus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little tern",
//     latinname: "Sternula albifrons",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Gull-billed tern",
//     latinname: "Gelochelidon nilotica",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant, has bred"
//         },

//     {
//         name: "Caspian tern",
//     latinname: "Hydroprogne caspia",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Whiskered tern",
//     latinname: "Chlidonias hybridus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black tern",
//     latinname: "Chlidonias niger",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "passage migrant, occasional breeder"
//         },

//     {
//         name: "White-winged tern",
//     latinname: "Chlidonias leucopterus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Cabot's tern",
//     latinname: "Thalasseus acuflavida",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Elegant tern",
//     latinname: "Thalasseus elegans",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sandwich tern",
//     latinname: "Thalasseus sandvicensis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Royal tern",
//     latinname: "Thalasseus maximus",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lesser crested tern",
//     latinname: "Thalasseus bengalensis",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Forster's tern",
//     latinname: "Sterna forsteri",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common tern",
//     latinname: "Sterna hirundo",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Roseate tern",
//     latinname: "Sterna dougallii",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "scarce breeding summer visitor"
//         },

//     {
//         name: "Arctic tern",
//     latinname: "Sterna paradisaea",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common guillemot",
//     latinname: "Uria aalge",
//     family: "Gulls, terns, and skimmers",
//     status: "A",
//     comminality: "breeding summer visitor and resident species"
//         },

//     {
//         name: "Brunnich's guillemot",
//     latinname: "Uria lomvia",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Razorbill",
//     latinname: "Alca torda",
//     family: "Auks",
//     status: "A",
//     comminality: "breeding summer visitor and resident species"
//         },

//     {
//         name: "Great auk",
//     latinname: "Pinguinus impennis",
//     family: "Auks",
//     status: "B",
//     comminality: "(extinct)"
//         },

//     {
//         name: "Black guillemot",
//     latinname: "Cepphus grylle",
//     family: "Auks",
//     status: "A",
//     comminality: "resident localised breeding species"
//         },

//     {
//         name: "Long-billed murrelet",
//     latinname: "Brachyramphus perdix",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ancient murrelet",
//     latinname: "Synthliboramphus antiquus",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little auk",
//     latinname: "Alle alle",
//     family: "Auks",
//     status: "A",
//     comminality: "rare winter visitor"
//         },

//     {
//         name: "Atlantic puffin",
//     latinname: "Fratercula arctica",
//     family: "Auks",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Tufted puffin",
//     latinname: "Fratercula cirrhata",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pallas's sandgrouse",
//     latinname: "Syrrhaptes paradoxus",
//     family: "Auks",
//     status: "A",
//     comminality: "rare vagrant, has bred"
//         },

//     {
//         name: "Rock dove",
//     latinname: "Columba livia",
//     family: "Sandgrouse",
//     status: "A & C",
//     comminality: "Resident, most birds are of feral origin"
//         },

//     {
//         name: "Stock dove",
//     latinname: "Columba oenas",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common wood pigeon",
//     latinname: "Columba palumbus",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian collared dove",
//     latinname: "Streptopelia decaocto",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "European turtle dove",
//     latinname: "Streptopelia turtur",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Oriental turtle dove",
//     latinname: "Streptopelia orientalis",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Mourning dove",
//     latinname: "Zenaida macroura",
//     family: "Pigeons and doves",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rose-ringed parakeet",
//     latinname: "Psittacula krameri",
//     family: "Pigeons and doves",
//     status: "C",
//     comminality: "resident introduced population"
//         },

//     {
//         name: "Great spotted cuckoo",
//     latinname: "Clamator glandarius",
//     family: "Parrots",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common cuckoo",
//     latinname: "Cuculus canorus",
//     family: "Cuckoos",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Black-billed cuckoo",
//     latinname: "Coccyzus erythropthalmus",
//     family: "Cuckoos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-billed cuckoo",
//     latinname: "Coccyzus americanus",
//     family: "Cuckoos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Barn owl",
//     latinname: "Tyto alba",
//     family: "Owls",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian scops owl",
//     latinname: "Otus scops",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Snowy owl",
//     latinname: "Bubo scandiacus",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant, has bred Shetland Islands"
//         },

//     {
//         name: "Northern hawk-owl",
//     latinname: "Surnia ulula",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little owl",
//     latinname: "Athene noctua",
//     family: "Owls",
//     status: "C",
//     comminality: "resident introduced population"
//         },

//     {
//         name: "Tawny owl",
//     latinname: "Strix aluco",
//     family: "Owls",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Long-eared owl",
//     latinname: "Asio otus",
//     family: "Owls",
//     status: "A",
//     comminality: "scarce resident breeding species"
//         },

//     {
//         name: "Short-eared owl",
//     latinname: "Asio flammeus",
//     family: "Owls",
//     status: "A",
//     comminality: "resident breeding species or winter visitor"
//         },

//     {
//         name: "Tengmalm's owl",
//     latinname: "Aegolius funereus",
//     family: "Owls",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European nightjar",
//     latinname: "Caprimulgus europaeus",
//     family: "Nightjars",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Red-necked nightjar",
//     latinname: "Caprimulgus ruficollis",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Egyptian nightjar",
//     latinname: "Caprimulgus aegyptius",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common nighthawk",
//     latinname: "Chordeiles minor",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Chimney swift",
//     latinname: "Chaetura pelagica",
//     family: "Nightjars",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated needletail",
//     latinname: "Hirundapus caudacutus",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common swift",
//     latinname: "Apus apus",
//     family: "Swifts",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Pallid swift",
//     latinname: "Apus pallidus",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pacific swift",
//     latinname: "Apus pacificus",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Alpine swift",
//     latinname: "Apus melba",
//     family: "Swifts",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Little swift",
//     latinname: "Apus affinis",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-rumped swift",
//     latinname: "Apus caffer",
//     family: "Swifts",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common kingfisher",
//     latinname: "Alcedo atthis",
//     family: "Swifts",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Belted kingfisher",
//     latinname: "Megaceryle alcyon",
//     family: "Kingfishers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blue-cheeked bee-eater",
//     latinname: "Merops persicus",
//     family: "Kingfishers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European bee-eater",
//     latinname: "Merops apiaster",
//     family: "Bee-eaters",
//     status: "A",
//     comminality: "scarce summer visitor - occasional breeder"
//         },

//     {
//         name: "European roller",
//     latinname: "Coracias garrulus",
//     family: "Bee-eaters",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Hoopoe",
//     latinname: "Upupa epops",
//     family: "Rollers",
//     status: "A",
//     comminality: "scarce summer visitor, occasional breeder"
//         },

//     {
//         name: "Eurasian wryneck",
//     latinname: "Jynx torquilla",
//     family: "Hoopoe",
//     status: "A",
//     comminality: "rare passage migrant, occasional breeder"
//         },

//     {
//         name: "European green woodpecker",
//     latinname: "Picus viridis",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Yellow-bellied sapsucker",
//     latinname: "Sphyrapicus varius",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great spotted woodpecker",
//     latinname: "Dendrocopos major",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Lesser spotted woodpecker",
//     latinname: "Dryobates minor",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eastern phoebe",
//     latinname: "Sayornis phoebe",
//     family: "Woodpeckers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Acadian flycatcher",
//     latinname: "Empidonax virescens",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Alder flycatcher",
//     latinname: "Empidonax alnorum",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern kingbird",
//     latinname: "Tyrannus tyrannus",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-throated vireo",
//     latinname: "Vireo flavifrons",
//     family: "Tyrant flycatchers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Philadelphia vireo",
//     latinname: "Vireo philadelphicus",
//     family: "Vireos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-eyed vireo",
//     latinname: "Vireo olivaceus",
//     family: "Vireos",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Golden oriole",
//     latinname: "Oriolus oriolus",
//     family: "Vireos",
//     status: "A",
//     comminality: "scarce breeding summer visitor"
//         },

//     {
//         name: "Brown shrike",
//     latinname: "Lanius cristatus", 
//     family: "Old World orioles",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Isabelline shrike",
//     latinname: "Lanius isabellinus",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-backed shrike",
//     latinname: "Lanius collurio",
//     family: "Shrikes",
//     status: "A",
//     comminality: "scarce passage migrant, occasional breeder"
//         },

//     {
//         name: "Long-tailed shrike",
//     latinname: "Lanius schach",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lesser grey shrike",
//     latinname: "Lanius minor",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Great grey shrike",
//     latinname: "Lanius excubitor",
//     family: "Shrikes",
//     status: "A",
//     comminality: "scarce winter visitor"
//         },

//     {
//         name: "Southern grey shrike",
//     latinname: "Lanius meridionalis",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Woodchat shrike",
//     latinname: "Lanius senator",
//     family: "Shrikes",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Masked shrike",
//     latinname: "Lanius nubicus",
//     family: "Shrikes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-billed chough",
//     latinname: "Pyrrhocorax pyrrhocorax",
//     family: "Shrikes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian magpie",
//     latinname: "Pica pica",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian jay",
//     latinname: "Garrulus glandarius",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Spotted nutcracker",
//     latinname: "Nucifraga caryocatactes",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Jackdaw",
//     latinname: "Coloeus monedula",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Rook (bird)",
//     latinname: "Corvus frugilegus",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Carrion crow",
//     latinname: "Corvus corone",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Hooded crow",
//     latinname: "Corvus cornix",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common raven",
//     latinname: "Corvus corax",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Goldcrest",
//     latinname: "Regulus regulus",
//     family: "Crows and allies",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common firecrest",
//     latinname: "Regulus ignicapillus",
//     family: "Kinglets",
//     status: "A",
//     comminality: "scarce resident breeding species and passage migrant"
//         },

//     {
//         name: "European penduline tit",
//     latinname: "Remiz pendulinus",
//     family: "Kinglets",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian blue tit",
//     latinname: "Cyanistes caeruleus",
//     family: "Penduline tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Great tit",
//     latinname: "Parus major",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Crested tit",
//     latinname: "Lophophanes cristatus", 
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Coal tit",
//     latinname: "Periparus ater",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Willow tit",
//     latinname: "Poecile montana",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Marsh tit",
//     latinname: "Poecile palustris",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Bearded tit",
//     latinname: "Panurus biarmicus",
//     family: "Tits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Calandra lark",
//     latinname: "Melanocorypha calandra",
//     family: "Bearded tit",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bimaculated lark",
//     latinname: "Melanocorypha bimaculata",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black lark",
//     latinname: "Melanocorypha yeltoniensis",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Greater short-toed lark",
//     latinname: "Calandrella brachydactyla",
//     family: "Larks",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Lesser short-toed lark",
//     latinname: "Alaudala rufescens",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Crested lark",
//     latinname: "Galerida cristata",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Woodlark",
//     latinname: "Lullula arborea",
//     family: "Larks",
//     status: "A",
//     comminality: "scarce resident breeding species and summer migrant"
//         },

//     {
//         name: "Eurasian skylark",
//     latinname: "Alauda arvensis",
//     family: "Larks",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "White-winged lark",
//     latinname: "Alauda leucoptera",
//     family: "Larks",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Shore lark",
//     latinname: "Eremophila alpestris",
//     family: "Larks",
//     status: "A",
//     comminality: "scarce winter visitor and passage migrant, occasional breeder"
//         },

//     {
//         name: "Sand martin",
//     latinname: "Riparia riparia",
//     family: "Larks",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Tree swallow",
//     latinname: "Tachycineta bicolor",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Purple martin",
//     latinname: "Progne subis",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian crag martin",
//     latinname: "Ptyonoprogne rupestris",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Barn swallow",
//     latinname: "Hirundo rustica",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common house martin",
//     latinname: "Delichon urbicum",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Red-rumped swallow",
//     latinname: "Cecropis daurica",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "American cliff swallow",
//     latinname: "Petrochelidon pyrrhonota",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Cetti's warbler",
//     latinname: "Cettia cetti",
//     family: "Swallows and martins",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Long-tailed tit",
//     latinname: "Aegithalos caudatus",
//     family: "Bush warblers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eastern crowned warbler",
//     latinname: "Phylloscopus coronatus",
//     family: "Long-tailed tits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Green warbler",
//     latinname: "Phylloscopus nitidus",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Greenish warbler",
//     latinname: "Phylloscopus trochiloides",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Pale-legged leaf warbler",
//     latinname: "Phylloscopus tenellipes",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Arctic warbler",
//     latinname: "Phylloscopus borealis",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Pallas's warbler",
//     latinname: "Phylloscopus proregulus",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Yellow-browed warbler",
//     latinname: "Phylloscopus inornatus",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Hume's warbler",
//     latinname: "Phylloscopus humei",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Radde's warbler",
//     latinname: "Phylloscopus schwarzi",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Dusky warbler",
//     latinname: "Phylloscopus fuscatus",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Western Bonelli's warbler",
//     latinname: "Phylloscopus bonelli",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Eastern Bonelli's warbler",
//     latinname: "Phylloscopus orientalis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Wood warbler",
//     latinname: "Phylloscopus sibilatrix",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common chiffchaff",
//     latinname: "Phylloscopus collybita",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Iberian chiffchaff",
//     latinname: "Phylloscopus ibericus",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Willow warbler",
//     latinname: "Phylloscopus trochilus",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Blackcap",
//     latinname: "Sylvia atricapilla",
//     family: "Warblers",
//     status: "A",
//     comminality: "resident breeding species & summer visitor"
//         },

//     {
//         name: "Garden warbler",
//     latinname: "Sylvia borin",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Barred warbler",
//     latinname: "Sylvia nisoria",
//     family: "Warblers",
//     status: "A",
//     comminality: "passage migrant"
//         },

//     {
//         name: "Lesser whitethroat",
//     latinname: "Sylvia curruca",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Western Orphean warbler",
//     latinname: "Sylvia hortensis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern Orphean warbler",
//     latinname: "Sylvia Sylvia crassirostris",
//     family: "Warblers",
//     status: "A",
//     comminality: "very rare vagrant"
//         },

//     {
//         name: "Asian desert warbler",
//     latinname: "Sylvia nana",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Whitethroat",
//     latinname: "Sylvia communis",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Spectacled warbler",
//     latinname: "Sylvia conspicillata",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dartford warbler",
//     latinname: "Sylvia undata",
//     family: "Warblers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Marmora's warbler",
//     latinname: "Sylvia sarda",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rüppell's warbler",
//     latinname: "Sylvia ruppeli",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Subalpine warbler",
//     latinname: "Sylvia cantillans",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Moltoni's warbler",
//     latinname: "Sylvia subalpina",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sardinian warbler",
//     latinname: "Sylvia melanocephala",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pallas's grasshopper warbler",
//     latinname: "Helopsaltes certhiola",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lanceolated warbler",
//     latinname: "Locustella lanceolata",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common grasshopper warbler",
//     latinname: "Locustella naevia",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "River warbler",
//     latinname: "Locustella fluviatilis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Savi's warbler",
//     latinname: "Locustella luscinioides",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare breeding summer visitor"
//         },

//     {
//         name: "Thick-billed warbler",
//     latinname: "Arundinax aedon",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Booted warbler",
//     latinname: "Iduna caligata",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Sykes's warbler",
//     latinname: "Iduna rama",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern olivaceous warbler",
//     latinname: "Iduna pallida",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Olive-tree warbler",
//     latinname: "Hippolais olivetorum",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Icterine warbler",
//     latinname: "Hippolais icterina",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Melodious warbler",
//     latinname: "Hippolais polyglotta",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Aquatic warbler",
//     latinname: "Acrocephalus paludicola",
//     family: "Warblers",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Sedge warbler",
//     latinname: "Acrocephalus schoenobaenus",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Paddyfield warbler",
//     latinname: "Acrocephalus agricola",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blyth's reed warbler",
//     latinname: "Acrocephalus dumetorum",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Marsh warbler",
//     latinname: "Acrocephalus palustris",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Eurasian reed warbler",
//     latinname: "Acrocephalus scirpaceus",
//     family: "Warblers",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Great reed warbler",
//     latinname: "Acrocephalus arundinaceus",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant, has bred"
//         },

//     {
//         name: "Zitting cisticola",
//     latinname: "Cisticola juncidis",
//     family: "Warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Cedar waxwing",
//     latinname: "Bombycilla cedrorum",
//     family: "Cisticolas",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bohemian waxwing",
//     latinname: "Bombycilla garrulus",
//     family: "Waxwings",
//     status: "A",
//     comminality: "winter visitor in highly varied numbers."
//         },

//     {
//         name: "Wallcreeper",
//     latinname: "Tichodroma muraria",
//     family: "Waxwings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-breasted nuthatch",
//     latinname: "Sitta canadensis",
//     family: "Wallcreeper",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian nuthatch",
//     latinname: "Sitta europaea",
//     family: "Nuthatches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Common treecreeper",
//     latinname: "Certhia familiaris",
//     family: "Nuthatches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Short-toed treecreeper",
//     latinname: "Certhia brachydactyla",
//     family: "Treecreepers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian wren",
//     latinname: "Troglodytes troglodytes",
//     family: "Treecreepers",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Northern mockingbird",
//     latinname: "Mimus polyglottos",
//     family: "Wrens",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Brown thrasher",
//     latinname: "Toxostoma rufum",
//     family: "Mockingbirds and allies",
//     status: "A",
//     comminality: "rare vagrant (one record)"
//         },

//     {
//         name: "Grey catbird",
//     latinname: "Dumetella carolinensis",
//     family: "Mockingbirds and allies",
//     status: "A",
//     comminality: "rare vagrant (one record)"
//         },

//     {
//         name: "Common starling",
//     latinname: "Sturnus vulgaris",
//     family: "Mockingbirds and allies",
//     status: "A",
//     comminality: "resident breeding species and winter visitor"
//         },

//     {
//         name: "Rosy starling",
//     latinname: "Pastor roseus",
//     family: "Starlings",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated dipper",
//     latinname: "Cinclus cinclus",
//     family: "Starlings",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "White's thrush",
//     latinname: "Zoothera dauma",
//     family: "Dippers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Varied thrush",
//     latinname: "Ixoreus naevius",
//     family: "Thrushes",
//     status: "A",
//     comminality: "very rare vagrant (one record)"
//         },

//     {
//         name: "Wood thrush",
//     latinname: "Hylocichla mustelina",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Hermit thrush",
//     latinname: "Catharus guttatus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Swainson's thrush",
//     latinname: "Catharus ustulatus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Grey-cheeked thrush",
//     latinname: "Catharus minimus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Veery",
//     latinname: "Catharus fuscescens",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Siberian thrush",
//     latinname: "Geokichla sibirica",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ring ouzel",
//     latinname: "Turdus torquatus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Common blackbird",
//     latinname: "Turdus merula",
//     family: "Thrushes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eyebrowed thrush",
//     latinname: "Turdus obscurus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dusky thrush",
//     latinname: "Turdus eunomus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Naumann's thrush",
//     latinname: "Turdus naumanni",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-throated thrush",
//     latinname: "Turdus atrogularis",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-throated thrush",
//     latinname: "Turdus ruficollis",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Fieldfare",
//     latinname: "Turdus pilaris",
//     family: "Thrushes",
//     status: "A",
//     comminality: "winter visitor, rare breeder"
//         },

//     {
//         name: "Song thrush",
//     latinname: "Turdus philomelos",
//     family: "Thrushes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Redwing",
//     latinname: "Turdus iliacus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "winter visitor, rare breeder"
//         },

//     {
//         name: "Mistle thrush",
//     latinname: "Turdus viscivorus",
//     family: "Thrushes",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "American robin",
//     latinname: "Turdus migratorius",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rufous bush robin",
//     latinname: "Cercotrichas galactotes",
//     family: "Thrushes",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Asian brown flycatcher",
//     latinname: "Muscicapa dauurica",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Spotted flycatcher",
//     latinname: "Muscicapa striata",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "European robin",
//     latinname: "Erithacus rubecula",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Siberian blue robin",
//     latinname: "Larvivora cyanea",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rufous-tailed robin",
//     latinname: "Larvivora sibilans",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Siberian rubythroat",
//     latinname: "Calliope calliope",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated robin",
//     latinname: "Irania gutturalis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-flanked bluetail",
//     latinname: "Tarsiger cyanurus",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Thrush nightingale",
//     latinname: "Luscinia luscinia",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Nightingale",
//     latinname: "Luscinia megarhynchos",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Bluethroat",
//     latinname: "Luscinia svecica",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Red-breasted flycatcher",
//     latinname: "Ficedula parva",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Taiga flycatcher",
//     latinname: "Ficedula albicilla",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Collared flycatcher",
//     latinname: "Ficedula albicollis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European pied flycatcher",
//     latinname: "Ficedula hypoleuca",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Black redstart",
//     latinname: "Phoenicurus ochruros",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "scarce breeding resident, passage migrant & winter visitor"
//         },

//     {
//         name: "Common redstart",
//     latinname: "Phoenicurus phoenicurus",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Moussier's redstart",
//     latinname: "Phoenicurus moussieri",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common rock thrush",
//     latinname: "Monticola saxatilis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blue rock thrush",
//     latinname: "Monticola solitarius",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Whinchat",
//     latinname: "Saxicola rubetra",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor & passage migrant"
//         },

//     {
//         name: "Siberian stonechat",
//     latinname: "Saxicola maurus",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European stonechat",
//     latinname: "Saxicola rubicola",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Isabelline wheatear",
//     latinname: "Oenanthe isabellina",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern wheatear",
//     latinname: "Oenanthe oenanthe",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "breeding summer visitor & passage migrant"
//         },

//     {
//         name: "Pied wheatear",
//     latinname: "Oenanthe pleschanka",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-eared wheatear",
//     latinname: "Oenanthe hispanica",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Desert wheatear",
//     latinname: "Oenanthe deserti",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-crowned wheatear",
//     latinname: "Oenanthe leucopyga",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dunnock",
//     latinname: "Prunella modularis",
//     family: "Old World flycatchers and chats",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Alpine accentor",
//     latinname: "Prunella collaris",
//     family: "Accentors",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Siberian accentor",
//     latinname: "Prunella montanella",
//     family: "Accentors",
//     status: "A",
//     comminality: "rare vagrant with multiple records in 2016"
//         },

//     {
//         name: "House sparrow",
//     latinname: "Passer domesticus",
//     family: "Accentors",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Spanish sparrow",
//     latinname: "Passer hispaniolensis",
//     family: "Sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian tree sparrow",
//     latinname: "Passer montanus",
//     family: "Sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Rock sparrow",
//     latinname: "Petronia petronia",
//     family: "Sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Western yellow wagtail",
//     latinname: "Motacilla flava",
//     family: "Sparrows",
//     status: "S",
//     comminality: "ven races including:"
//         },

//     {
//         name: "Citrine wagtail",
//     latinname: "Motacilla citreola",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Grey wagtail",
//     latinname: "Motacilla cinerea",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "White wagtail",
//     latinname: "Motacilla alba",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species with two additional visiting races"
//         },

//     {
//         name: "Richard's pipit",
//     latinname: "Anthus richardi",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Blyth's pipit",
//     latinname: "Anthus godlewskii",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Tawny pipit",
//     latinname: "Anthus campestris",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Olive-backed pipit",
//     latinname: "Anthus hodgsoni",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Tree pipit",
//     latinname: "Anthus trivialis",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "breeding summer visitor"
//         },

//     {
//         name: "Pechora pipit",
//     latinname: "Anthus gustavi",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Meadow pipit",
//     latinname: "Anthus pratensis",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Red-throated pipit",
//     latinname: "Anthus cervinus",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Eurasian rock pipit",
//     latinname: "Anthus petrosus",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Water pipit",
//     latinname: "Anthus spinoletta",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "winter visitor"
//         },

//     {
//         name: "Buff-bellied pipit",
//     latinname: "Anthus rubescens",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common chaffinch",
//     latinname: "Fringilla coelebs",
//     family: "Wagtails and pipits",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Brambling",
//     latinname: "Fringilla montifringilla",
//     family: "Finches",
//     status: "A",
//     comminality: "winter visitor, occasional breeder"
//         },

//     {
//         name: "European serin",
//     latinname: "Serinus serinus",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce passage migrant, occasional breeder"
//         },

//     {
//         name: "European greenfinch",
//     latinname: "Chloris chloris",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Citril finch",
//     latinname: "Carduelis citrinella",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "European goldfinch",
//     latinname: "Carduelis carduelis",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian linnet",
//     latinname: "Linaria cannabina",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Twite",
//     latinname: "Linaria flavirostris",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Eurasian siskin",
//     latinname: "Spinus spinus",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species and winter visitor"
//         },

//     {
//         name: "Lesser redpoll",
//     latinname: "Acanthis cabaret",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Mealy redpoll",
//     latinname: "Acanthis flammea",
//     family: "Finches",
//     status: "A",
//     comminality: "winter visitor and passage migrant, occasional breeder"
//         },

//     {
//         name: "Arctic redpoll",
//     latinname: "Acanthis hornemanni",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Two-barred crossbill",
//     latinname: "Loxia leucoptera",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common crossbill",
//     latinname: "Loxia curvirostra",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Scottish crossbill",
//     latinname: "Loxia scotica",
//     family: "Finches",
//     status: "A",
//     comminality: "resident endemic breeding species"
//         },

//     {
//         name: "Parrot crossbill",
//     latinname: "Loxia pytyopsittacus",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Trumpeter finch",
//     latinname: "Bucanetes githagineus",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common rosefinch",
//     latinname: "Erythrina erythrinus",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce migrant, occasional breeder"
//         },

//     {
//         name: "Pine grosbeak",
//     latinname: "Pinicola enucleator",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eurasian bullfinch",
//     latinname: "Pyrrhula pyrrhula",
//     family: "Finches",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Hawfinch",
//     latinname: "Coccothraustes coccothraustes",
//     family: "Finches",
//     status: "A",
//     comminality: "scarce resident breeding species"
//         },

//     {
//         name: "Evening grosbeak",
//     latinname: "Hesperiphona vespertinua",
//     family: "Finches",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Snow bunting",
//     latinname: "Plectrophenax nivalis",
//     family: "Finches",
//     status: "A",
//     comminality: "winter visitor & scarce breeder"
//         },

//     {
//         name: "Lapland bunting",
//     latinname: "Calcarius lapponicus",
//     family: "Longspurs",
//     status: "A",
//     comminality: "winter visitor, occasional breeder"
//         },

//     {
//         name: "Summer tanager",
//     latinname: "Piranga rubra",
//     family: "Longspurs",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Scarlet tanager",
//     latinname: "Piranga olivacea",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rose-breasted grosbeak",
//     latinname: "Pheucticus ludovicianus",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Indigo bunting",
//     latinname: "Passerina cyanea",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Eastern towhee",
//     latinname: "Pipilo erythrophthalmus",
//     family: "Cardinals and allies",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Lark sparrow",
//     latinname: "Chondestes grammacus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Savannah sparrow",
//     latinname: "Passerculus sandwichensis",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Song sparrow",
//     latinname: "Melospiza melodia",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-crowned sparrow",
//     latinname: "Zonotrichia leucophrys",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "White-throated sparrow",
//     latinname: "Zonotrichia albicollis",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Dark-eyed junco",
//     latinname: "junco hyemalis",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-faced bunting",
//     latinname: "Emberiza spodocephala",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Pine bunting",
//     latinname: "Emberiza leucocephalos",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellowhammer",
//     latinname: "Emberiza citrinella",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Cirl bunting",
//     latinname: "Emberiza cirlus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Rock bunting",
//     latinname: "Emberiza cia",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ortolan bunting",
//     latinname: "Emberiza hortulana",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Cretzschmar's bunting",
//     latinname: "Emberiza caesia",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-browed bunting",
//     latinname: "Emberiza chrysophrys",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Rustic bunting",
//     latinname: "Emberiza rustica",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Chestnut-eared bunting",
//     latinname: "Emberiza fucata",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Little bunting",
//     latinname: "Emberiza pusilla",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "scarce migrant"
//         },

//     {
//         name: "Yellow-breasted bunting",
//     latinname: "Emberiza aureola",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Chestnut bunting",
//     latinname: "Emberiza rutila",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Reed bunting",
//     latinname: "Emberiza schoeniclus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Pallas' reed bunting",
//     latinname: "Emberiza pallasi",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-headed bunting",
//     latinname: "Emberiza melanocephala",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Corn bunting",
//     latinname: "Emberiza calandra",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "resident breeding species"
//         },

//     {
//         name: "Bobolink",
//     latinname: "Dolichonyx oryzivorus",
//     family: "Buntings and American sparrows",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Brown-headed cowbird",
//     latinname: "Molothrus ater",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Baltimore oriole",
//     latinname: "Icterus galbula",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Red-winged blackbird",
//     latinname: "Agelaius phoeniceus",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Ovenbird",
//     latinname: "Seiurus aurocapilla",
//     family: "Icterids",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern waterthrush",
//     latinname: "Parkesia noveboracensis",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Golden-winged warbler",
//     latinname: "Vermivora chrysoptera",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Black-and-white warbler",
//     latinname: "Mniotilta varia",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Tennessee warbler",
//     latinname: "Oreothlypis peregrina",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Common yellowthroat",
//     latinname: "Geothlypis trichas",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Hooded warbler",
//     latinname: "Setophaga citrina",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "American redstart",
//     latinname: "Setophaga ruticilla",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Cape May warbler",
//     latinname: "Setophaga tigrina",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Northern parula",
//     latinname: "Setophaga americana",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Magnolia warbler",
//     latinname: "Setophaga magnolia",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Bay-breasted warbler",
//     latinname: "Setophaga castanea",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blackburnian warbler",
//     latinname: "Setophaga fusca",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow warbler",
//     latinname: "Setophaga petechia",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Chestnut-sided warbler",
//     latinname: "Setophaga pensylvanica",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Blackpoll warbler",
//     latinname: "Setophaga striata",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Yellow-rumped warbler",
//     latinname: "Setophaga coronata",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Wilson's warbler",
//     latinname: "Cardellina pusilla",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"
//         },

//     {
//         name: "Brown booby",
//     latinname: "Sula leucogaster",
//     family: "New World warblers",
//     status: "A",
//     comminality: "rare vagrant"}
// ])