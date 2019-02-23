Function line(xl, yl, х2, у2 , n) {
    /*xl, yl – начало линии, х2, у2 – конец, n – толщина */
    var clinewidth = " WIDTH=" + n + "HEIGHT=" + n  /* строка для учета толщины */
    var xstr = "" // строка тегов для записи в HTML-документ 
    var xstr0 = ' <IMG SRC="point.bmp"' + clinewidth + ' STYLE = "positlon:absolute; '
    var k = (y2 – yl)/(x2 – xl)	// коэффициент наклона линии
    var x = xl		// начальное значение координаты х
    /* Формирование строки, содержащей теги <IMG. . . >: */
    while (x <= х2) {
    xstr += xstr9 + 'top:' + (yl + k* (x – xl)) + ': left:1 + x + '
    x++;
    // запись в документ
    }}