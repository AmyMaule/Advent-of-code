// --- Day 6: Custom Customs ---

// As your flight approaches the regional airport where you'll switch to a much larger plane, customs declaration forms are distributed to the passengers.
// The form asks a series of 26 yes-or-no questions marked a through z. All you need to do is identify the questions for which anyone in your group answers "yes". Since your group is just you, this doesn't take very long.
// However, the person sitting next to you seems to be experiencing a language barrier and asks if you can help. For each of the people in their group, you write down the questions for which they answer "yes", one per line. For example:

// abcx
// abcy
// abcz

// In this group, there are 6 questions to which anyone answered "yes": a, b, c, x, y, and z. (Duplicate answers to the same question don't count extra; each question counts at most once.)

// Another group asks for your help, then another, and eventually you've collected answers from every group on the plane (your puzzle input). Each group's answers are separated by a blank line, and within each group, each person's answers are on a single line. For example:

// abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b

// This list represents answers from five groups:

//     The first group contains one person who answered "yes" to 3 questions: a, b, and c.
//     The second group contains three people; combined, they answered "yes" to 3 questions: a, b, and c.
//     The third group contains two people; combined, they answered "yes" to 3 questions: a, b, and c.
//     The fourth group contains four people; combined, they answered "yes" to only 1 question, a.
//     The last group contains one person who answered "yes" to only 1 question, b.

// In this example, the sum of these counts is 3 + 3 + 3 + 1 + 1 = 11.

// For each group, count the number of questions to which anyone answered "yes". What is the sum of those counts?

let input = `nvlyak
nyvha
yaen
qynia

kend
endk

atxcykpvmb
pcvmthyxbak
ayvpcbtkxm
cvpkyabtmx
typbmvckxa

s
s
s
s

on
aoqc
owq
coa

pw
wpi
pwxlhqor
pw

nx
xn

dlevrzpucfmsq
pceimlrfsquvd
dpceruqsfmlv
hgxudfpqyvbcslrjname

kczmswvorg
uryvlqaogmdixs
rmostvg
gsrmovb

ref
fer

vmwdhgnlfiyoepsujbk
epudykjwhignmfbovsl
fjvuimnwbkogsldhpey
ibmhuscpgeolfkynvdwj
psjgubfvlhaknodeiywm

fmnpljusix
vqrefngyjdahclk
lfjons

y
uiwl

lsuqkmjinrzhgevfpwto
gkmodihnsjtful
ciguflhkojmtsn
thkjnoufsimgl
oskgmdfljntuhi

gaktdwxhmqvfrpsuc
hmtwkgipdvaurxqf
akrmpxtughdqwfbv
gumqniswhrdkvftaxp
hagouqxpzrjlmedftywkv

zkbyecw
kczeybw
wbeyakuzc

iwdkjlarzfynvechgbxsq
jetfxrzdbcksnavilmwgyh
wvexlryjbizfgkhanqdcs

vk
kv
kv
vk

yrguw
rguyw
pwuryg
gnuwry

dyhkusanvjwc
ukaywncj
uyqjknwac
aknyjcuw
jnukwaytxc

toczmkldrevywiajgn
jyldmgewcvrozinkat
iynkmatdjerlogzwvc

pthyrfjgqelxa
qfejxtrynlh
xwdfkuziyhejtqovrmlc

osjrgc
vohfpa
goc
gjo

j
jon
j
xdj

bpqhmgwzakfrtjvuno
eafupgombqnwrkzth
frwqtdngpbhuaklzmo
wgtnuchpkqibfzmravso
mfbtvkghauzopnrwq

xiocgdwpastbmyj
rdzgcbtfaomsy
dstgbcymozkqal

xvc
cvx
xvc
xvc

dhvtlqkeniymjzoa
eoazjnhvtkyqdlm
koltmeyqjhzdva
doumkhrlyzjqeagtcv

mn
mfhw

kx
x
jm

x
xv

tdhyubvwqfxejslpringc
xqhvtbfwrygsdapjiulnec
vnwbsurdiexghpjtlycqf

pqtdgsmkolzryca
qjguxdratfeclpmoy

twnviyzmlk
gknjmyqvziwl

deoabzihqvycxn
iqcxadpehvry

dbflcxvnapwgei
pchmodnafl
hadcflpn
dlcfanp

tk
kt

peuroxtzyg
iwdcnlqfskmbavjh

mjfh
ynkbrsdpwoqtagci
lvx
ujxez
xl

gyuszwb
sioduawzrglb
tsbumxwzg
zwgeuxbs

tujvkwpy
tyvrpmjfk
vwpkuyjt

wdkqailvjmfcshugy
qugwvlxdsikhfmyjac
dkiscawvyfqhmjlug

noblsu
snloub
sulobn
lonubsm

osecqjbfg
fljbmiose
ojesfbt

zmctviabre
ajzmicetrvb
ctmivabzre
yrztbmieavc
mivcbtazer

tyql
osmjgxzrcakn
iwftdbl

nmqflphkvyjcatgbzd
jxzemtvdknwqr

ilxrytkdpmsevfjchozqw
tpdrjxwihvlycozemsfkq
hitwfmzvjpylcodbqxsrke

flhp
pflh

ao
a
o
o
gljzn

ajmkvwqu
ogvjzwta
whalvuj

mhktpynfrjgblaqueox
anmjxplvibukhztqersy
tabljcpemkyrxhunwq

lnkvfawqo
nofpsqwavylz
vofwalqen
hcnowiaqlfv

dofxbaqrtnyvkpljmhsu
uklstfynmbxhapojqi
tufmnpaqyojsklxhb
oanlusqmxftkpjbhy

tpjle
the
vtpez
ytern
ouecxwfkt

jbna
xepqbmufn
ybjni

jklhaxoqysbt
tzwpcf
tenfcvdmpzu

kyqumgfrdiapzwojtvch
fvczqjrgadiwhnpluomk
dpwkmrjzauiqvfgcho
nkpwrmzidfahcvjuogq
azrkxioghpvcudmwqfj

udjshwgpeaozimcl
fylwnoevcza
evlakborcfwz

xhued
iubgewo

lywovcemagd
ahveyomxsl
oqzyfljavbe

pkyn
befycqpi
pysk
yp

mgi
mgi
digm
gmi

cgdqeoyfjranxuv
lwnkzeptsdqihvcujmg

wzqrhgibdxuyl
ludbwqxgiyr
yruxibwdgql
bgtwqxruylid
buyrwlidgxq

gqwvxspbl
xvbwpsgql
bspgxwvql
cwlxsvqgpb
sgpxqblwv

camqk
onaslperix
jauw
yatm

z
z
z
z
z

fx
fxe

goemcr
roegm
sgmxiero
ogmert
germo

czgdxtiprhnwqeujkfl
dyhmkanzwbv

n
e

dkcjqbw
o
gp
h

zbwcu
ubf
mveurnab

tqwbxuc
qcwutxb
ucbxwqt
xqwutbc
xqtuwcba

uwhqrt
wrtq
trwq
crtqw
wrtqc

rqfntm
nrqm
rqmn

limsht
alstikh
ilhst
uhitls
lsahti

oaex
vsgyo
lziu

cwqdlxbst
cdxtlwbsq

hgqc
hgdq
qhg

eh
he
eh

zfutalwkxms
ukxltsfzmwa

zpklocsqgwyhb
zobyqhlcksgpw
zhspqwovjylkgbc

ymkudfqethwgji
emtuyfwghjdqki
zwyeumktfhjdirgq
wymqgifkudjteh

edhqnrxtpz
tqdxznrhep
qzepndrthx
exzrhnqptds
zetyhrpdqunx

vmleax
valxum
vpmlax
axlpvumz
clvamxbn

ebt
xr
rl
u

vzny
nz
nz

ywebzj
ywefjzb
bxwnjcyzkep
zjeywfpb
yldrbhsizajewvu

hfd
dmf
fadh
dvmf
fcousnld

egar
hwnrgzcp
bgofedjr
jkruvsylg
rdvgue

jsge
hesqg
esug

xaoz
ocuqev
fwgrlp
otxv

fzemjdhwb
xhdmjzbe

ytsfpumedxqvzhl
fdteschymvxqlpz
phyrfwtqlaxgvznesd
hvlextsbqpzyfd
jydlhetzoqfpsvix

jxkrobp
rsplxbgk
yxmbpkorhj

injbuyktrcs
bcsriktuny
skyrhbtnucxe

duck
cykuv
osfcurnlwax
uvmc

vpt
tpv
pvt
vpt
vtp

dacxvsi
icaxsd
xdihcneas

nf
nkf
fn

yrewaxckd
wtydesfcr
erdftwqyc

hmfezapkqjyri
ekqajhyzfpmri
raikjeqmhfypz
qjmyrekfzphai
frtjeqkimhazpys

ryxmsbqovuidphfwecajnz
hdjmiqbxnpvouyfcewsazr
vubyrcmqeswafxjzhinpdo
cbjmnaoqurlhsifvwzdexyp

iu
ui
isutlr
iu
iu

lftaziorb
rvamfeyjgqnx
frtak
aifr
aftzr

us
schk

bjafywgieth
tifbhyjgwade
imhwefbgatjy
wgtyifejbah

a
yj
b
iab

qkgazumerlhb
syritxopfvd

gdiakrne
ygdpcwqfbmikzanver
dolarkigen
gtkanierdh

axv
axdvl

erpjfh
prgjfeh
hrejpf
pejfhr
ejrhfp

zijsrtcqdxmy
mtxdfyji
timydgxj
jtmhvakxidyn
iyjmwdvxnt

rh
har

tdoyugpljirwenzx
nurlzgjtyopide
jnrlitgpzdoyue
zlptnudjryogie
pzgyeoliturnjd

ivcyexsotkzqmr
sgfjhqnpy

omw
joq
mop

welbhpzftgjinqyk
gwpdjqacitshlbykfzmrx

sygqwn
fwyqsdg
scgwqy

gdjzwbhltxs
dlkojzbq
jfavyipcembun

cydkuqlhan
uavstnychbqxk
azqntcuyhk

k
bf
z
w

gyh
e

rhmpg
pmhgr
rpmhg

pas
vhtsaqfgnu
kpjsa
sab
jcopska

tsjabirpehudncx
custniapedhxrb
cepnuastxhdirb
shbpetcdaxuinr
dbtiepaucrshnx

tuswfrqpgxk
kprjsdtqxunf
pxwfrtuqske
xwskmfprqut
pfrtxqskhu

szirxjtu
zuxjtsi
jutsxiz
usjitxz
ijstxuz

zqesxfbmrivokl
mevkzirbfol
fbkomeyvilrz

rlwoeckxnh
xebkornwcl
xcoknwler
wnlkrcoex
kecronwxl

fmdbraihnpxytkcgezu
kbeyxmadczhritnpuf
pnhfmubicxteadrzyk
updrybtmhzefcnxkia
kbezfjwmhytnixacudpr

w
w
w
w

fgwdoctvpzymhbrkjxn
yaqjctxvsrozmwk
xkwozitrvmeqjcyl
cwkazxtrmlijyov

vnym
bvmy
yvm
byvm
vym

mxjblongrfahycqvpu
ncywhdpxefajbrgloqu

sgukdmfqvbwcei
zigahlxojdnpc

fudobaklngyjqpstmiz
psflydzmbtkiqaojgnu
itgzqsfdyabnolpjkum
sitlkyuqnjodzmpbagf
ytdijopqublaksmngzf

vhaobfn
ohbnfav
vahofbn
naovhfb

tfhsqwcbrv
iqrbzspnwyhtfc

pfbwotesuyhkvgx
vnrlcxayzdmih

nbyhpfklvtqo
qbtjopfyk
qpoeybfkt

uvmgzs
pvsmizrug
ghvmszu
mugszcv
kusmvzg

mua
amu
uma
mua

d
m

s
s
yuk
s

gtjqp
pfotsh
pshgbt
wpeztyr
bqjtplo

zwbvestiaoljy
gmnzshupfqre

anvsdkbltiugc
tqsdcanuibgvkl
stkrvabegidclxun
takcsgnuvmdibl
cvqsklngiubadt

txvfnuwcljpqkeryoamigd
jgarvmodftpniekquxszcyhb

htu
hegb
whf

jn
nj
jn

vcjlxekmqzoduphynw
hkyeojlvndumcwzx
ozhdnvjeckwlmuxy
ujxdyznvlcmokhew
vdywzekucjnhoxlm

blxuhyvjrzow
uzlwokmsripy

rum
mrl
rbwfmz
durmq

obcpqvkitduelwf
ahcrwiltpuedfobxkv
cvijgzoukptwdfble
kpqjduetilovfcbw

irfqsp
wifas

xvgyrpq
yrpqvhgzx
fspxmrivkwgycnequ
axhyqrpvgz
xdygqvrpa

xrlmcsibvea
bdcveasxzip
esvbclaxi
vaxsbcei
xaeibsvc

songrtmwhpydqizlf
halvzroefxcsubt

uqozritygam
kmtryqvz
qfmjstkyrz

rqtepcofhuylnxaj
xoptqwruhijsmnzcylfe
hxqcpyfjntleuro
brjyuoetfxpndlvcqh

prltixwohdmfjukgqzsv
orluxtzpvjafdqwkhsgbe

iyhuarewvbfjmlz
vramijyfzhbew
zyehbmwvifjra
vjmweybazihrf

duixtbqyhomsla
suinmaxtlqdoyhb
htiquxmaybosld

pselyhov
zhwpovekt
snheopv
ivxophe
nhpoeuv

amqcriebkojlwyuxnhfdptgzvs
uovdszkygbjhanefqxplimtwcr

ozngukih
nvksbd

grkotivmcxnyubwleqspjzhfad
ekmqxnfabwiduopjsgclzvyhtr

jzv
wzxfivmjb
zjvp
zjv
jzvs

js
evqis
qxs
swyct
s

n
n
zn

udjtxws
usdwixj

lf
l

cdsaxzlv
jcsxlnydtrzvk
lvdqamzsxhc
udlxwczvgs

gutwbrhjxyeam
jrleawgbsnxthimyu
rbjexdythumwag
hrwjmoexytqaubg
uwymabxrhjqgdect

vipjrlbsmcogxznty
vetpngyzsbmoxcrijl
hoxvbsnjlfygmrczpti
pmlgzyasvxticjbrknod

xzakbvtehnlciswmyufjdrgo
kocmslwbgvuxijernzydfhat
vcdxgkslnzoarmjwutyiefbh
tzhugvbcnokyxsfliwardmej

up
u
pu
fu

cbzjelmqivw
ickezvjlqm

srwnt
nwrtj
rswnt

hfjxoskd
dlpzeyjai

mt
tm
mt
mt
tm

rpxenfzmhwdvacbygiujkqot
lhbvkwmpfyazrtojcquxind
qtcjdairznhuwxmpsvyfkob

apvk
qvapk

ujscpqtgbyezdfhnwoil
bftognyujilpwhsqzdce
zbhslwipdjeqntcfouyg
tyuqdlfepgzshcoiwnbj
dzqxjblenucpwshtoiyfg

cdxtsaunbwkezlrp
vbdpsuktlxczerwan
pnxudwaclrtebksz

tq
t
zt
t
jtqg

fvmhiloanbgjzptryucdkxw
jzhwtkbdpoxfacirngluyvm
pwnybcjmgxurfzivoklhdta
brtavopdklnhxwgzmifyjcu
ncifvypdtgwxbzakhjrmulo

kwhiguft
uxyo
ux

ruyoe
ezqhbi
clndewsfta
e
qrke

doa
doa
doa

xt
tx
xt
xt
xt

roxwktbmgiyc
qtbejyxzlpcaighfod
oscgtuyiwvrbkxn

agcdevxkmbnzqjl
jrdzmnclbgkvexqwa

pqjtyenfmxdaorw
qayjpxmfdterwon
frdtlawxmjnoeqpy

aze
zea
veaz
yzxdequoa

eq
uetqs

jsmezrk
zskmer
zmkers
krezsm

mfzqsukgcw
cmskguzfqw
gksucwfmqz
uwqsgfzmck
wfzucmgsqk

wftx
fwtd
twf

bizwg
gzwosd
afzqrwun
cjpzwb

qjntchmdbgpe
nqtephjgmdbc
qjeltdcphgbmn
nqtbcjhepmdg

g
g
gr
g
g

yulnpwc
uplcwn
nplemufywc
calkisogupw

sigh
igsh
ghski

naqpd
xydrsjwlibzm
qdevh
cd

mraejinsdp
mierdjansp
qpsmrianjde
npirjedams
ridpaejmns

o
o
o
o

lhfqsxm
xlmsqfh
slfqmxh

jhivsoabqlfpeuw
fvxrelbhuncowqjtsz

yajhetclfk
jnqbylmpwgxcf
azchyrsivjeltdf

n
n
n
n
n

hkuaq
hkqua
uakqh
khqtalu
ahxkuqy

tguprf
pfu
ufp
uofp

lnmtjo
njolmt

qymzdw
vjckmtl
oipreghfausnxb

niswjectqkldzyg
wunjdetklisczyqg
gldcysiqznjtekw
iqwdczjsytkleng
lgyiezdncjqktws

dntm
atm
tma
tm
txm

ntpcwask
skcna
nksac

prai
pria
arpi
irpa

mzldgbrtovj
tbjgldozmvr
ogzvdlrjtbm

ft
fq

jgstdlzarcemiopynukfw
ywlhakgzeoxdnjmsirc
moicgebadzlwkysrnxj

jpeiqxbz
xipjebzt

rnpf
fqhu
agprm
wedyzci
bxur

aynswjoklfeqzcitxudbrvh
ihrbxwvdqsyoejpnfkzc

hrqliwxtfbk
qiwfrxbtkhl
kihqxrftlwb
wrhlxbtqkif
tfbqriwlkhx

bwdhnqk
wbhkqtd
qwbkhdx

fpcboialrdgqkejntyzm
lmieayocqpkznbrtdfgj
mbtdrpozfljkeyangiqc
pmdjlerfkybgnaoqzitc
pganmcfbtedkrzloyqij

zfrvn
zfnr
znrf

nuq
ltiuacgjs
aug

xj
lyzixn
eaxwuf

aeywqjkl
eanklwju
kjelzaw
ealjwtk
azklwej

ncqxulrmfvedao
eodqxlvmrncu
elrmnuqpcdoxv
qloxudmvnecahr
lcdxqwmurvznjeo

aijnhvxemsqztfk
xnvkehsiqmzft
tehvxnfskiwqzm
epsmzhixqvtnkfr
htkinzvqefxmrs

wgfzomlbhujxs
ezvrxmkycafwob

lhyrq
ylfherq
hlreyq
wqlyerh
hgsqlyru

acnkurdevm
duernacvm
nteaducorvs

hxvqtsjzgn
iakeoyr

id
i
di
hkxi

fqunm
funxikw
xfiuknz

wvgpqlzxnui
livzmwyqgpnu

eanbkcjlxpsm
ofmdwrqe

w
ws
wr
w
w

aylsbi
lyaiqsgb
vyeblmasuhi
yblsia
ylbsiaq

fpbhozqdljytwcnxsvr
zarwdgqhtvyxcnpbsofji
dbzhsfwrvqnyjxtpoc
qwxpbnycrfjsozvhtd
tsoypwnmzfjhbvdxcqr

bezfskqut
egbpkdflqtmouzs
kxzenfustqb
tsebufkzq

hoekryzuqt
oreuqhyktz
teorhukzqy
kyqehortuz

d
uqwgitdaj
dz
vod
fvd

smjqnlt
jsqmlnt
ntsqlmj
jqntslm

saxdlkjwvyctqenrio
wqnvsoyaextcilkrjd
krdqwevyliojxcntas
ywlnkcafdoirsvjxetq

ryae
yaq
ya
ya
ya

epvy
nvyqu
vnxy
oyvh

kschegfmla
lgfmscaehk
gshfalcemk
lcgemshkfa
mkgaselhctf

bfxqtegnoismrk
mnuivtxasgbjqyfkp
mkxgrnltfiqbhsw

s
s
s

zoe
eoz
oze
eoz

q
kuprd
gvmbn
vctx
oi

nbrjveycdlw
jyhfcwnglerv

vkoxqwfhubrcsnme
bqkexhovswmntfrc

aidoznexygkjlqs
neysaiudmoqklgxzc

ypsn
eyp
yp
iyp

gol
olg

rypjohwvxkisnldatuzfb
btpxvolknwdhuryiafjsz
vkahgbsitwdoyjplfruznx

mipqtk
nikqpvu

kztifpne
yzit
rigtz
zait

jxgvt
gfjoky
kvygh
dmwgqsrcp
ounalgyze

nypvuiseqtjwxchlbfogdamzr
apqnbzhwmjldotfsvexruicyg
bpyjzomwahcrgsutlefxkqdivn

qumcbsvlpthfwyda
hagwiucnvfdypqlzs

tog
otg
gfto
gto

ctp
uda

vlbi
swmiujf

xbi
upsdbi
bizr

ltw
we
wzavnymh
iw
wfe

caqjdphelmtvyfbxo
acxmtljedhoqbsfyp

fyqthpe
bmrceljqy
eyqt

frjdhuyqsgon
krouhsfgydnj

ltopekjnacgbms
elngjotmpsca
splcgnatmoej
egjctspmlaon
jtealcmpongs

fvsmiotkb
fbnupmcsxd
fmkvjysb
qbksmywrtf

mklqnp
mqnlk
mwqnlke

jykqrlaocvunfpix
rcymsnwuafdtvgbqoieh

c
c
ct
c

mlv
lyfpq
vsli
vrdwl

srtaq
nuptlr

hcfjdaqwo
qmoefalzdh

zxyksijbeahgvc
xgvjhsczeyikba
yxickjesbhgavz
sjvgibeczxhkay
hvgizjmaxsybcke

wjmypxi
jipmx
pjmix
bjivamxp

dytnalmqkbpruef
qplfuynbdaertm
rbnetqdupamlwyf

e
e
m
p
e

b
eb
b
b
b

yieovwqukxcnbfjpdg
qjvunkgywpfoidbxec
jupowqfbiknvdgeycx
dqeicgjfpxonbukwvy
gociquxvjbfdwnpkye

lwrch
huosc

somiywgdbf
fbmvdwgzsy
ufrltkydsnwm

epvfduyh
vfpeyuhd
epdchvyuf
udeohyvpf
evhpyufd

b
b

szfgmlxwd
eapoqydvi

puedtjkqbwfznhvycxrolamsgi
cvqeyszrwdfnkutjihxmlapbgo
nfdpoukvizgctxwmeaqjrhlbys

nuf
je
uieq
ctodh
sbx

psrwqlgd
lrwdqgpzs

qheijmngzsrdawbvucolxpy
vhqnlcouibjdarzxpmeygs
edlixjhrquamovnpbsgycz

jkphyr
urycxn

snbcyoe
nuewpy

gbnsoirkwyhp
iogsqbkymwp
fzbwkeyutdxp

w
w
w

jsbp
bjsp
jspb

jfbdpv
pfjvb

wfhvsjloznb
gmupxcnrakelfsvzqd

dbsuoriacgnwxtzveyhqfkmp
adwcifzvsgnkphyburtexomq
wzbkmsdpfrhiaqxyecuonvgt
athzyrgbwckvomqudsnexfip
vidbhyqesancrzugkxfopwmt

nl
ln
nl
osnl

iewcxgqtf
gtwmfieqc
icfvqwyhadgkn
qcgwerfli

wyj
jy
atycnje
qyjg
yzjsg

ivjwfeuz
jvcw
mbhvwj
rswvhjd

zmjlpeia
eimrlpzaj
jmealyqpi

zgkf
gkz

zuosdlvkxm
tlxskcvpumo
kuyomrxlvs
uvosxmldyk

yuilcqhgmazts
swhvdcigltmakzuy
stojxiflyghnazcpum
gkhqtyciuwszmal

nzhlyu
hngc
ngcah
anch
nvkhj

xhfvwbkn
nahwxfo
fhgnwx
dmfuxnht

vbhpedluncftoxys
cydfsolpejhbntux

vkilx
pvxskd

hvwuecgs
guvwcsh
sgrwculmvhb
wcpznuqsvghi
vhwcsulg

ndfapjlztc
npoacfjtld

jzd
xaulvyksp
zeh

ck
ck
ck
kc

kiroh
rh

euxdrkvtfbqon
ytfvurxwheokqn

sirznatbxkghm
skaiqzrmhnx
ztgmhrsikanx
hksxmairnez
ywdiracnfsuzhjxmpk

bacgwvmxrdfne
pdcofwbza
cfqdwuptzabo

dqmp
dqpm
qvmpd

kczxnlerm
vqrzjmf

qmuorwspx
dywcxarilegkh

gqzph
qhapozk
zhqp

fastkjnl
jsnafkt
jfnacskt

fxgpiadjrvhs
smfwbejadh
hjmfyaods
fzdqsjham
hlcbyfjkaunsdt

dqlevpahscoyi
iypldavhsqoce
clhvyaisoepdq
eayqiosdlpvch
epodliqvhcsay

nhxbmlqv
qylkhmnxvbj
xbnlvqmh
vxmbhqln
lbvhxsqmn

exrtdq
tderq
djretq

lwqj
jmwlr
zbswtx

pxi
ipx
ixp
xip

vgfscwrqzdojxhe
xfvqhzsjecgownd
qdopyzjwegfsxchv
gosqeckhvzdjfxw
gszxpfveocjhqmdw

gvlyuiscaewfpx
gfwjtapuoynvqzi

ycsdnbzjoki
wfpvogmqhautlx

tbjliqdfzgny
zjwilpghqdyekc

yftcnao
ncfytaio
conyfta

yslactbwhjfvnomiue
mbyiavojlwtunces
eontumvircsalbjwy
jguvcxylitsbmwenazo
bayolijwqcevpmsktdun

ynmki
ykinm
inymk
iykmn
yimnk

vzjnpybg
vjqfyno
rnvity

ilxkjhcfpdmeb
hwdjleirc
aiulechdj
dljiwehc

rptom
ife
nuli
yized

loe
eg

fprtvcgkwnasljebhm
nvbltrckumfhpgjew
grpuefzknmblovjw
bjwgykpinqlemrd
mrlegnjwbkp

xtquyrjnszl
ysrqzj
zsqyjpr

ft
fjt
ft
tf

ejli
l
l
rl

lwgrihbdvno
ydbrvhgolniw
rivdongwhlb
ndhbrgwilov
dwvrnlhbgio

fc
fc
cqfo
fc
fc

nhaoi
nioha
osijah

hgrec
gchre
cehrg

higmvfbtjre
ikhxjbrefvq
brjiefhvl
ivfeqblhrj
hrkifjvbe

vsgqmibordtznkl
dehupjlcxtsrnfawy

t
crfi

nrai
hjcmpzla
dveria

krp
achvofx
kbp

vfdzhuskanm
lhucb
uh

qu
uqj
quh
qu

tokmzyuxjsbvic
zegday

wqfxlhyapcdtv
vctalwmjdpqyfh

nqge
vneiqt
hqvfenwj
nksqcrlmde
vqgbone

f
w
w
f
oq

qziwcdjyepvhn
wvypijednqzc

uwjflbhoq
dwxublig

c
lc
ec
c
txcjrkd

cglvpyadf
rqfvgaplc
kgpatsxuelvh
oapgvliwc

ln
st
bs

sfra
dskrnf
mzhjrfpx

phu
uph
uph
hpu
phu

pcxhvbf
hxbtyk

jdzsaiwbphmftqxrlngcyoe
mqbrsplojgyheznxcdtfwia
pitajxzhsonwygrfblecmqd
nyliauzgfbcprewhdtjmsxoq
taxnylhvgjqewcksfpmzdbior

h
c
om

ruplsfnhyjqigwkzexbtoc
newjivhyckdagob
ywocjmnkbghie

jdrtpbvohaxy
dnjxyrfsv

lq
nsulxvmhj
l
lk

fdsxhvqaiblt
fihykrdlsoaqx
laqgpznecjiuxfsdhmw

capkzueqjmdv
ckdvymqazu
fklcmdbuxqarzv
zkcsvmqhiadgeu
jotqkuzndvciwam

lzqbrgkp
grvpntoz
ozwvpg
suefagcp
pkjygd

zbangyoqjlkdevrxti
gzniebarjloykqtdxv

xviqehycstgjladuoznfwp
odwplyiqnxghutezcvsj
ersxgqtcjouvdiznlyhwp
cpshuoijtxvelqynwmdgz

tnzkdmgqci
mqkzgydtijn
mtikzqdng

d
ad
d

k
iof

otkvualrqdsixf
nkhwid
dbkiwpj
ikd
ekziydgm

wjvgqsxinfburh
wxgqsurjvflnhbi

hebmgftkpcq
owektbpfhqcmg
egtfbpckhmdq
qmcetgpfkhb

exukswmlgznjoqhvabid
dkgmeoahtxpzflnwru

lf
fl
lf
fle

zblhfjqpr
rzp
uprzo

wmktipjq
twmikp
jmtwikyp
azcempwtkiv
itkmpw

qwodjmelanykpxuh
weqnajoxmupklyihd
pjodermlyuknwxhqa
mqbaoxylgdshtnjpwuvkfe
lnaxijmwqhukodpye

azxw
xazw
zwax
wafqztx
zaxw

ydzmvpskfjiqneluabgtrw
vyfdpqrkbistwlaxzjum
ukortizjvdwhlpafycmqsb

cno
y
no
y
bqe

zlcotxyhfeij
xtlvhifkszoj

kczqegopj
qupzjod

hpclqaktjmbnyxw
iqphxcamk

rebc
qcbra
brc
crb

flkoiavp
aduhjeqtyrmzkn
cslwgfaokp

qmnzcjb
bmeqzjsc
jxochgfbmwzvq
zqcbmja

deyifvsxw
evdyw
edbhzyuqv

xmhknbcwdaztvl
mruslxozyangpj
xgszalnm
aoqmleunizxs

eh
he
eh
nxeh
eh

cjbx
jxsub

yusezdlpgxtm
dyrkmstuegpx
pdxmyeutvkjsrhgaw

ruz
rzu
zur
zru

wgbdctzlsmh
peglstyhcd
adtqlhcgvs
tylndgrcujhsbx
odltpshecg

ylntchparijwfo
wtrjpiaohylcf
wlfyvrehcutapgko

tkbpfhjzravmquxewgl
goxphazbfvrqkijlwtm
mkrbzqphvawtyjfxilg
plhcnwgqmrxfvdzabjkt

pfhtlqawckegij
wjpaksdctfghlo

jqctpgrvu
qkvgjuprtc
vutcqpgrj
gpruvjtcq
gvqprujct

dkevisf
kfei
mlukicwfje

nsoyjcwzife
spnocteji

cfuzsbtvdkq
rcasmqzkpdxuo
drxzwqckus
zqsrndeukxic

vkgpbz
zkpvg
zkvpg

eqhpyasvnumzgclitofjw
ofsgpaijzqmtvcuwhlbe
ujiewctamfxqdghslpvzo
qivnwtlfcmpgaeouhjzs

lfahbowz
ryxcwtvs
mytucdivw

lqetdskgyznojharxvufpwimbc
kpcoqugdvxibftjmywzslnreh
mxjgcinhobeldrwfukyvptqsz

jxhc
fjsqglzwhu
mhcj
hecj

ihdsbckn

siponk
sikonp
psinkfo

qbvdrutoan
qbcftunvoi
qvkoxzbtushny
qtwojubnv

eu
u
xtujdms
ehu

jkqdoner
eyxnkuaoqfg
kqenxmyo

wk
wk
ykw
kw
kw

gvrebwq
erkflnbjhagv
givrybues
itpvegsrbz

hlykfbqnexots
tqhgfonkzeyxsbl
qkcybxtsnloefh
fxalqkntsuobyech
hvyjefkbitrqoplwxns

paxu
parnkxu
pxua
xupa
uxpa

ytzjokcqlmviha
sykbmizchvq
aocvizymhkq
ivhkcqlzym
iayelkzqmtchv

aekxzstuc
czetkxsau
zqpakexsuct
zuxtacske
kuszetcax

czlkiprvydnmsoxqwajgb
byszdijkplawcvnm
ikmwandcjzlvybsp
nbvwlikjscdmpzay

fpuxqtigly
hpuqkfxigyt
tifpygqkux
uygqftwpxi

gvdwnrefpj
nwgapvedr
egdvwnrp
xshwezgipdvr

joefgnu
tknuhvfy

rjo
rpjyos
rjo
roj
jro

zxvatmfbujgryinokwehsc
xjzdusehibgtvncmkflyao

fpnkyo
nopfky
kpnyof
ponkfy
tnpfoyk

mevhflgowbkqdjutrzys
qrgmkeohvstnbwfdjluy

pejhrgwtmcny
hjangqtbprsmwe
umiegvdprwtznhj
nhgptresjwlm

ohgmls
othljm
jmhtlso
mhxlcnp

dtufxjrbq
rdfjxtqbu
qjtdufbrx

iexvaok
kexu
xkje
xkfe

dpursykgo
ugkrsqpody
sokpgyrdnu
kwsuoyrpdg
sovjiydkagmuptbrhcf

mwxcqs
mcwxqs
mwxqsc
tcswmxq

cqatfowbvmirly
woibncaylqgvsf

bico
izdt
tiz

af
fkq
f
fyb
f

wxftpjclsrhm
sdzuvanek

jr
rjp
rj

zhpknlosiadcfbjweuqvy
ulbkhapqzisefdyonjc

oivjy
djvwbofy
kvlqyxrj
bsivdyjf

kifcamqwgy
amfkgicyq
miygkcafq

egslifrtvcnhk
vymgiprjzcxasbqn

gji
g
oar
jgk

gxtkohsqcvmrjzie
jfghvuxokznqwsdmarcl

xvlnpjdar
vldnopxaj
dtnpsayjvlc
dgjvalnmp
mfnvjdpal

mnaxd
xmda
kdaxm

szpeac
ezpsac
aesxpcz

vgpldyruqmfbsehzkxjwa
wrxmvtqgyjsdazlkbofeuhc
ablmzyevqgswfnxkdrphuj

aoedxnzjqsbyihtpkcfuwl
dsbeyathwxjupozlqncikf

mwzkrnhp
okqj

s
s

erjyvcwhuitdaogsnfb
dculesyjotbwhavfirn
swfbohtjdciaurenyv
ubsvfamrjoynwchitdke

yb
yb
by

pbrhzvjcsgeylfxt
sjcyezvxfgbhtplr

rphvaxw
zhjapvrxw
xahvwspr
lpdqrvwahmx

rpmild
vlrpswnb
ylrezfpi
pbraslm
utxgqhpjkorl

pizbmcxreftywhdq
pqyezcxtidgmhfrw
ixrctphwqydzfme
fxdhpyctwrinmazqe
pctzyrhdiqwmxef

wasjdyzgfu
zfdyujgwsa
wbyzjgadufs
afzswydguj

zqanmksjruhx
qljaunzmkrshx
jrxqsmzknhua
rjazknumxqhs
kuzqxhjmasrn

virdpbztchkgo
hdiopebvzaw

ziwscmotk
jwmas

h
h
h
h
h

qhywbkuvnst
zmynwxvufqarkbeht

onfvrqxa
xrvqnofa
fiuarnvoxq
qvzafonrx
fqvxebnaolr

kmfulryg
bkswufgylmr
myulgjrfk
gouyxrlkmf

skerjmgbvtcphdzafniyxo
ljybizemsvhokxrdcagptnf

oyt
hytx
mdtyjrslkczu
bvyto

mpwv
acvbp

m
ftz

kvtmidlngo
edznioyvkx
kofvirdn`;

let declarations = input.split("\n\n");

// the total number of individual characters will be added to sumPart1
let sumPart1 = 0;

function part1() {
  // remove the \n from any declarations spanning multiple lines
  let sortedDeclarations = declarations.map(declaration => declaration.split("\n").join(""));
  sortedDeclarations
    .map(declaration => declaration.split("").sort())
    .forEach(declaration => {
      let sum = 0;
      declaration.forEach((char, i) => {
        // if the current character is not the same as the previous one, add it to the local sum variable
        if (char !== declaration[i-1]) {
          sum++;
        }
      })
      // at the end of each iteration, before sum is reset, add it to sumPart1
      sumPart1 += sum;
    })
}
part1();

console.log(sumPart1); // 6551

// --- Part Two ---
// As you finish the last group's customs declaration, you notice that you misread one word in the instructions:
// You don't need to identify the questions to which anyone answered "yes"; you need to identify the questions to which everyone answered "yes"!
// Using the same example as above:

// abc

// a
// b
// c

// ab
// ac

// a
// a
// a
// a

// b

// This list represents answers from five groups:

//     In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
//     In the second group, there is no question to which everyone answered "yes".
//     In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
//     In the fourth group, everyone answered yes to only 1 question, a.
//     In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.

// In this example, the sum of these counts is 3 + 0 + 1 + 1 + 1 = 6.
// For each group, count the number of questions to which everyone answered "yes". What is the sum of those counts?

let sumPart2 = 0;

function part2() {
  declarations.forEach(declaration => {
    let groups = declaration.split("\n")
    // Only need the first declaration as every other one must contain the same characters
    let firstGroup = groups[0];
    // [...firstGroup] gives the same output as .split("")
    [...firstGroup].forEach(char => {
      sumPart2 += groups.every(targetChar => targetChar.indexOf(char) !== -1)
    })
  })
}
part2();
console.log(sumPart2); // 3358
