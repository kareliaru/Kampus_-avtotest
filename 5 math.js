"" + 1 + 0        //10    (сложение со строкой преобразует в строку)
"" - 1 + 0        //-1   (унарный "-" преобразует строку в числа. Пустая строка ==0)
true + false      //1   (true==1, false==0. 1+0==1)
6 / "3"           // 2   (деление преобразует строку к числу)
"2" * "3"         //6   (-/-)
4 + 5 + "px"      //9px   (сложение 4 и 5 и конкатенация строки)
"$" + 4 + 5       //$45   (то- же что и в 1 примере)
"4" - 2           //2    (то- же, что и во 2 примере)
"4px" - 2         //Nan   ("4рх" преобразуется в NaN)
"  -9  " + 5      //-95   (конкатенация строчных значений 9 и 5)
"  -9  " - 5      //-14  (-9) + (-5)==-14
null + 1          //1    null преобразуется в 0
undefined + 1     //NaN   (undefined при численном преобразовании становится NaN, а любое действие с NaN возвращает NaN)
" \t \n" - 2      //-2   строка преобразуется в 0
