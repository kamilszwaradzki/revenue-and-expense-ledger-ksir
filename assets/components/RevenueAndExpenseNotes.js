import React from 'react';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function NestedList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [open9, setOpen9] = React.useState(false);
  const [open10, setOpen10] = React.useState(false);
  const [open11, setOpen11] = React.useState(false);
  const [open12, setOpen12] = React.useState(false);
  const [open13, setOpen13] = React.useState(false);
  const [open14, setOpen14] = React.useState(false);
  const [open15, setOpen15] = React.useState(false);
  const [open16, setOpen16] = React.useState(false);

  const handleClick = (id) => {
    if (id === 1){
        setOpen(!open);
    } else if (id === 2) {
        setOpen2(!open2);
    } else if (id === 3){
        setOpen3(!open3);
    } else if (id === 4) {
        setOpen4(!open4);
    } else if (id === 5) {
        setOpen5(!open5);
    } else if (id === 6) {
        setOpen6(!open6);
    } else if (id === 7) {
        setOpen7(!open7);
    } else if (id === 8) {
        setOpen8(!open8);
    } else if (id === 9) {
        setOpen9(!open9);
    } else if (id === 10) {
        setOpen10(!open10);
    } else if (id === 11) {
        setOpen11(!open11);
    } else if (id === 12) {
        setOpen12(!open12);
    } else if (id === 13) {
        setOpen13(!open13);
    } else if (id === 14) {
        setOpen14(!open14);
    } else if (id === 15) {
        setOpen15(!open15);
    } else if (id === 16) {
        setOpen16(!open16);
    }
  };

  return (
    // źródło: https://www.pcbiznes.pl/ksiazka-przychodow-i-rozchodow-kpir/?privacy=updated#programdokpirpobierz
    <List
      sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Kolumny
        </ListSubheader>
      }
    >
      <ListItem onClick={() => handleClick(1)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 1.: Liczba porządkowa" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Każdy podatnik może sam sobie ustalić system numerowania wpisów w księdze podatkowej.
            Numerację można rozpoczynać od 1 każdego roku lub każdego miesiąca – wystarczy, 
            że przyjęty sposób numeracji będzie stosowany w sposób chronologiczny, systematyczny i ciągły.
            Sposób numerowania powinien uniemożliwiać dopisywanie wcześniejszych numerów, 
            dublowanie numerów oraz usuwanie zaksięgowanych dokumentów.
          </Typography>
          <Typography paragraph>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
                Oznaczenie liczby porządkowej należy przepisać na dokument (dowód księgowy).
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(2)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 2.: Data zdarzenia gospodarczego" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open2} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Data zdarzenia gospodarczego to:
          </Typography>
          <List dense={ true }>
                <ListItem>
                    <ListItemText
                    primary="dla faktur sprzedaży, dziennego zestawienia faktur i wystawianych rachunków: data sprzedaży"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="dla dobowych raportów fiskalnych: data sprzedaży"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="dla ewidencji sprzedaży lub rejestru VAT i 
                            miesięcznych zestawień raportów fiskalnych: data ostatniego dnia miesiąca"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="dla otrzymanych pieniędzy, innych niż 
                            przychody ze sprzedaży (np. odsetek, odszkodowań, dotacji): data wpływu pieniędzy"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                    primary="dla faktur zakupu, otrzymanych not księgowych, 
                            dowodów przesunięć, dowodów poniesienia opłat niefakturowanych: data wystawienia dowodu (dokumentu)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dla paragonów dokumentujących zakupy: data wystawienia paragonu fiskalnego"
                        />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dla towarów i materiałów podstawowych, otrzymanych a niefakturowanych
                        (lub otrzymanych przed wpływem faktury): data przyjęcia towarów i materiałów"
                        />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dla innych kosztów, takich jak opłaty parkingowe, diety przedsiębiorcy, 
                            rozliczenie kosztów użytkowania samochodu prywatnego, częściowe rozliczenie opłat 
                            za mieszkanie (użytkowane do celów firmowych i prywatnych), jak i media: data 
                            wystawienia przez podatnika dowodu wewnętrznego."
                        />
                </ListItem>
          </List>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
                Data wystawienia faktury – w przypadku przychodów ze sprzedaży, podobnie jak data wpływu faktury – 
                w przypadku zakupów, nie mają znaczenia dla umieszczenia zapisu w księdze podatkowej!
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(3)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 3.: Numer dowodu księgowego" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open3} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Przepisujemy numer z faktury lub innego dowodu do księgi podatkowej. 
            Jeżeli do księgi wpisujemy dokument zbiorczy, 
            taki jak przykładowo dzienne zestawienie sprzedaży – wystarczy wpisać numer tego zestawienia.
          </Typography>
          <Typography paragraph>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
                Jeżeli podatnik wpisuje do księgi podatkowej ewidencję, przykładowo: ewidencję sprzedaży, ewidencję pożyczek, 
                ewidencję (rejestr) VAT, to w wierszach z tymi ewidencjami kolumnę 3, 4 i 5 zostawia pustą.
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(4)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 4 - 5.: Dane kontrahenta" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open4} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          W tych kolumnach wpisuje się dane kontrahenta (dostawcy lub kupującego), takie jak: nazwa firmy lub imię i nazwisko, 
          adres siedziby. Oczywiście dotyczy to transakcji dokumentowanych fakturami, rachunkami lub umowami.
          </Typography>
          <Typography paragraph>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
                Kolumna ta jest wypełniana wyłącznie w przypadku dokumentów zewnętrznych, tzn. wystawianych dla kogoś 
                lub otrzymanych; nie należy jej wypełniać przy wpisywaniu do księgi dowodów wewnętrznych, przykładowo: 
                diet czy rozliczeń „kilometrówki”. Kolumny tej nie wypełnia się również przy księgowaniu sprzedaży z raportów fiskalnych.
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(5)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 6.: Opis zdarzenia gospodarczego" />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open5} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Opis powinien zwięźle oddawać istotę transakcji. Ważniejsze jest, do czego dany zakup służy, 
          czyli uzasadnienie celowe lub funkcjonalne, niż precyzyjne określenie co to jest, 
          przykładowo wpisanie numeru seryjnego urządzenia. Kategorie przychodów i wydatków przedsiębiorca 
          może sobie określać według własnych potrzeb, mając na uwadze, aby opisy te były zrozumiałe i 
          czytelne dla ewentualnych kontrolujących księgę podatkową w przyszłości.
          </Typography>
          <Typography paragraph>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
            Przedsiębiorca zakupił książkę o przepisach podatkowych dla małych firm. W opisie zdarzenia gospodarczego 
            nie należy wpisywać tytułu książki, ani jej streszczenia. Poprawny opis może brzmieć: „zakup towarów 
            handlowych do sklepu A”, „zakup literatury fachowej”, lub „zakup materiałów dla uczestników szkolenia”.
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(6)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 7.: Wartość sprzedanych towarów i usług" />
        {open6 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open6} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          O zawartość tej kolumny przedsiębiorca powinien dbać szczególnie, i każdej firmie życzymy liczb z jak największą 
          ilością zer właśnie w tej części księgi podatkowej – to właśnie tutaj wpisuje się wartość sprzedaży z podstawowej 
          działalności gospodarczej.
          </Typography>
          <Typography paragraph>
          W tej kolumnie należy wpisywać wartość netto (bez podatku VAT) przychodów ze sprzedaży produktów, towarów handlowych 
          lub usług. W niektórych rodzajach działalności, np. w kantorach czy lombardach, wartością przychodu jest kwota uzyskanych 
          prowizji (a nie cała wartość otrzymanych pieniędzy).
          </Typography>
          <Typography paragraph>
          Odpowiednio do danych umieszczonych we wcześniejszych kolumnach, w tym miejscu wpisuje się kwotę albo poszczególnych 
          (pojedynczych) transakcji, albo kwotę wynikającą z dziennego zestawienia przychodów, albo sumę wynikającą z zestawienia 
          dowodu miesięcznego (dowodu zbiorczego).
          </Typography>
          <Typography paragraph>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
                Jeżeli przedsiębiorca prowadzi różne rodzaje działalności, np. usługi kosmetyczne, szkolenia i sprzedaż wyrobów hutniczych, 
                to przychody z każdej z tych działalności wpisuje się w kolumnie 7.
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(7)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
      <ListItemText primary="Kolumna 8.: Pozostałe przychody" />
        {open7 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open7} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Pozostałe przychody to… wszystkie inne, niż przychody ze „zwykłej” sprzedaży. Jakiego rodzaju mogą to być przychody?
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="Przychody ze sprzedaży środków trwałych."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Przychody z wynajmu składników majątku (jeżeli nie jest to zasadnicza działalność)."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Otrzymane odsetki, np. z lokat firmowych lub od kontrahenta – za nieterminową płatność."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Otrzymane odszkodowania."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Otrzymane kary umowne."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Otrzymane dotacje, dofinansowania."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Dodatnie różnice kursowe."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Umorzenie zobowiązań (zwolnienie wierzyciela z długu)."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Wartość otrzymanych świadczeń w naturze."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Wynagrodzenie płatnika z tytułu terminowych płatności podatku i świadczeń."
                    />
                </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(8)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 9.: Przychody razem" />
        {open8 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open8} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Sumuje się kwoty z kolumny 7. i 8.
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(9)}>
      <ListItemIcon>
          <ArrowForwardIosIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary="Kolumna 10.: Zakup towarów i materiałów" />
        {open9 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open9} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Przepisy podatkowe nakazują, aby w tej kolumnie wpisywać wyłącznie zakupy
           materiałów oraz towarów handlowych w cenach zakupu. Oznacza to, że wszelkie 
           koszty dodatkowe zakupów, takie jak opłata za przesyłkę, powinny być wpisane 
           odrębnie do kolejnej kolumny tj. koszty uboczne zakupu.
          </Typography>
          <Typography paragraph>
          Wracając do zakupu materiałów oraz towarów handlowych. Co wykazujemy w tej kolumnie, 
          ściśle zależy od rodzaju prowadzonej działalności. Oto kilka przykładów.
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="Towary, czyli rzeczy zakupione w celu odsprzedaży, bez przerabiania."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Materiały do produkcji wyrobów (surowce) w firmie produkcyjnej."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Materiałami są również kupowane półprodukty."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Materiały, które stanowią część składową gotowego wyrobu, np. opakowania, elementy montażowe."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Materiały zużywane w procesie „wyprodukowania” usługi (tak, kolumnę zakupu materiałów uzupełnia się również w firmach usługowych!)."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Usługi (!) podwykonawców, wykorzystywane w procesie produkcji wyrobów."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Usługi (!) podwykonawców, wykorzystywane w procesie wykonywania usług."
                    />
                </ListItem>
            </List>
          </Typography>
          <Typography paragraph>
          W tej kolumnie nie należy wpisywać takich zakupów, które służą ogólnie prowadzeniu działalności, 
          np. zakup paliwa do samochodu firmowego. usług telekomunikacyjnych czy chociażby waciki używane 
          w gabinecie kosmetycznym. Można powiedzieć też w ten sposób, że wpisuje się tutaj takie zakupy 
          (rzeczowe lub usługi), które składają się na konkretny produkt czy usługę, lub: które zostaną 
          wykorzystane do „wyprodukowania” konkretnego przychodu.
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
            Materiały oraz towary wpisuje się w tej kolumnie w cenach netto, (jeżeli przedsiębiorcy 
            przysługuje prawo do odliczenia VAT) lub w cenach brutto, jeżeli przedsiębiorca nie jest 
            VAT-owcem lub z innych powodów nie wolno mu odliczyć VAT od zakupu.
            </Typography>
          </CardContent>
          <Typography paragraph>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
                W przypadku zakupów z importu, koszty cła i opłat celnych wpisuje się do ceny zakupu, a nie do kosztów ubocznych.
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(10)}>
      <ListItemIcon>
          <ArrowForwardIosIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary="Kolumna 11.: Koszty uboczne zakupu" />
        {open10 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open10} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Koszty uboczne zakupu to takie wydatki, których poniesienie wynika bezpośrednio z zakupu materiałów lub towarów handlowych,
            wpisanych do kolumny 10. Oznacza to, że przedsiębiorca nigdy nie będzie wypełniał kolumny 11., bez umieszczania wpisów w kolumnie 10.
          </Typography>
          <Typography paragraph>
          Przykładowe koszty uboczne zakupu to:
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="koszty transportu, przesyłek i dostaw,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="koszty załadunku i wyładunku,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="koszty ubezpieczenia w drodze,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="koszty pakowania,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="koszty usług dodatkowych do kupowanych towarów i materiałów, np. usługa cięcia."
                    />
                </ListItem>
            </List>
          </Typography>
          <Typography paragraph>
          W każdym przypadku, te koszty dotyczą kupowanych materiałów lub towarów handlowych. Nie należy wpisywać tu kosztów 
          transportu związanych ze sprzedażą.
          </Typography>
          <Typography paragraph>
          Dla wpisów w tej kolumnie nie ma znaczenia, czy koszty uboczne to dodatkowa pozycja na fakturze od dostawcy, 
          czy osobna faktura, a nawet zakup od innej firmy. Jeżeli jednak koszty uboczne wliczone są w cenę towaru, 
          to nie rozdzielamy ich na siłę do kosztów ubocznych.
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(11)}>
      <ListItemIcon>
          <ArrowForwardIosIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary="Kolumna 12.: Wynagrodzenia w gotówce i w naturze" />
        {open11 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open11} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Prawidłowe wypełnianie kolumny 12. z kosztami wynagrodzeń jest proste, jeżeli pamięta się o tych zasadach:
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="Należy wpisywać kwotę brutto wynagrodzenia, czyli kwotę przychodu z listy płac, 
                        a nie kwotę faktycznie wypłaconą pracownikowi „na rękę”."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Wynagrodzenia to nie tylko pensje pracowników z tytułu umów o pracę, 
                        ale również z tytułu umów cywilnoprawnych, takich jak umowy – zlecenie czy umowy o dzieło."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Przychodem pracownika są nie tylko wypłacone pieniądze, ale również inne 
                        świadczenia i korzyści w postaci niepieniężnej."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Nie wpisujemy do tej kolumny składek ZUS finansowanych przez przedsiębiorcę, tzw. narzutów."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Podstawą do wpisu w tej kolumnie jest lista płac, lub rachunki do umów zleceń."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Do dowodu księgowego wynagrodzeń należy dołączyć potwierdzenie odbioru wynagrodzenia."
                    />
                </ListItem>
            </List>
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(12)}>
      <ListItemIcon>
          <ArrowForwardIosIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary="Kolumna 13.: Pozostałe wydatki" />
        {open12 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open12} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Wydatki pozostałe, czyli wszystkie inne koszty firmy, niż wpisane do wcześniejszych kolumn. 
          Oto katalog przykładowych wydatków, wpisywanych do tej kolumny:
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="faktury wystawiona na firmę za czynsz, za media i utrzymanie lokali firmowych"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dowody wewnętrzne z rozliczeniem kosztów prowadzenia działalności w prywatnym mieszkaniu"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="faktury za wyposażenie na potrzeby firmy (nieamortyzowane składniki majątku firmowego)"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="rachunki za usługi telekomunikacyjne, za telefony służbowe"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="wydatki na paliwo, materiały eksploatacyjne do samochodów"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="materiały inne, niż podstawowe i pomocnicze, wpisane do kolumny 10."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="zakup usług innych, niż sklasyfikowane w kolumnie 10. lub 11."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="polisy ubezpieczeniowe np. majątku firmowego, oc działalności"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dowody opłacenia podatku od nieruchomości, opłat skarbowych, taksy notarialnej itp."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dowody wewnętrzne z naliczeniem amortyzacji"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="faktury za materiały bhp dla pracowników"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dowody opłacenia składek na ubezpieczenia społeczne i FP przedsiębiorcy oraz osób współpracujących"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dowody opłacenia składek ZUS w części tzw. narzutów na wynagrodzenia pracowników"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="dowody wewnętrzne z naliczeniem diet do podróży przedsiębiorcy"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="koszty delegacji pracowników, w tym ewidencje przebiegu pojazdu"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="protokoły strat wynikających z likwidacji, zniszczenia lub kradzieży 
                        środków trwałych lub zapasów towarów czy materiałów"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="ujemne różnice kursowe."
                    />
                </ListItem>
            </List>
          </Typography>
          <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
            Do kolumny 13. nie wolno wpisywać takich wydatków, których nie uznaje się według przepisów za koszty 
            uzyskania przychodu tych wydatków w ogóle nie wpisuje się do księgi podatkowej. Takimi wydatkami są 
            przykładowo: składka zdrowotna przedsiębiorcy, nieopłacone składki ZUS, wydatki reprezentacyjne, 
            naliczone a niezapłacone odsetki, przekazane darowizny, naprawy powypadkowe samochodów nieubezpieczonych ac.
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(13)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 14.: Wydatki razem" />
        {open13 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open13} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Suma kolumny 12 i 13.
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(14)}>
      <ListItemIcon>
          <ArrowForwardIosIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary="Kolumna 15.: Wolna" />
        {open14 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open14} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          Nazwa tej kolumny sugeruje, że… powinna pozostać niewypełniona? Nie o to tutaj jednak chodzi. 
          Wpisane tutaj kwoty nie są zliczane do podsumowania przychodów i kosztów. Oznacza to, że ta 
          kolumna może być przeznaczona do wpisywania:
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="zaszłości gospodarczych, czyli przychodów bądź kosztów dotyczących wcześniejszych lat podatkowych,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="wydatków, odnoszących się do przychodów następnych okresów (miesięcy lub lat),"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="danych liczbowych wynikających ze spisu z natury,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="ujmowania zakupów środków trwałych lub wartości niematerialnych i prawnych, 
                        które będą rozliczane w kosztach dopiero w kolejnych okresach jako amortyzacja."
                    />
                </ListItem>
            </List>
          </Typography>
          <Typography paragraph>
          W szczególności warto wykorzystać to pole u podatników prowadzących księgę metodą memoriałową do 
          wpisywania tych wydatków, które są tzw. kosztami pośrednimi, dotyczącymi okresu przekraczającego 
          rok podatkowy. Przykładem takiego wydatku jest część polisy zakupionej na okres czerwiec 2015 – maj 2016; 
          część wartości polisy, odpowiadająca proporcji 7/12, może być wpisana w roku 2015 w kolumnie 15, skąd będzie 
          przepisana do kosztów w kolumnie 13 na początku roku 2016.
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(15)}>
        <ListItemIcon>
            <ArrowForwardIosIcon fontSize='small' />
        </ListItemIcon>
        <ListItemText primary="Kolumna 16.: Koszty działalności badawczo-rozwojowej" />
        {open15 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open15} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Tu wpisuje się wszystkie koszty działalności badawczo-rozwojowej, o której mowa jest w artykule 26e ustawy o PIT.
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem onClick={() => handleClick(16)}>
      <ListItemIcon>
          <ArrowForwardIosIcon fontSize='small' />
      </ListItemIcon>
      <ListItemText primary="Kolumna 17.: Uwagi" />
        {open16 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse style={{ background: "antiquewhite" }} in={open16} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          W kolumnie tej nie wpisujemy już żadnych liczb, a jedynie opisy, np. wyjaśnienia dotyczące poszczególnych wpisów 
          w księdze podatkowej. Kolumna ta pełni funkcję pomocniczą i przepis nie narzuca ani bezwzględnego obowiązku 
          wypełniania tej kolumny, ani tego, co należy tu wpisywać. W praktyce przedsiębiorca sam decyduje, czy i jak używać tej kolumny. 
          Oto przykłady jej zastosowania, czyli jakimi informacjami można wypełnić tą kolumnę:
          </Typography>
          <Typography paragraph>
            <List dense={ true }>
                <ListItem>
                    <ListItemText
                        primary="zaliczki, które nie są przychodem ani kosztem,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="materiały powierzone,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="przyjęcia i wydania opakowań zwrotnych,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="adnotacje o przyczynach niezgodności chronologii zapisów w księdze,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="adnotacje o dacie wpływu dokumentów,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="wyjaśnienia błędów i opis korekt,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="terminy płatności,"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="daty zapłaty."
                    />
                </ListItem>
            </List>
          </Typography>
          <Typography paragraph>
          W szczególności warto wykorzystać to pole u podatników prowadzących księgę metodą memoriałową do 
          wpisywania tych wydatków, które są tzw. kosztami pośrednimi, dotyczącymi okresu przekraczającego 
          rok podatkowy. Przykładem takiego wydatku jest część polisy zakupionej na okres czerwiec 2015 – maj 2016; 
          część wartości polisy, odpowiadająca proporcji 7/12, może być wpisana w roku 2015 w kolumnie 15, skąd będzie 
          przepisana do kosztów w kolumnie 13 na początku roku 2016.
          </Typography>
        </CardContent>
      </Collapse>
      <ListItem>
        <CardContent style={{ border: 'solid 1px black' }}>
            <Typography paragraph style={{ fontWeight: 'bold' }}>
                Ważne!
            </Typography>
            <Typography>
            W przypadku wprowadzania zapisów wynikających z prowadzenia ewidencji sprzedaży, kupna i sprzedaży wartości dewizowych, 
            ewidencji dla potrzeb podatku od towarów i usług, nie wypełnia się w książce kolumn 3-5.
            </Typography>
        </CardContent>
      </ListItem>
    </List>
  );
}