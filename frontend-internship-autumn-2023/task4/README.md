# 1 задание

| Ограничение времени | Ограничение памяти |
|--|--|
| 3 секунды | 256 МБ |

На Диком западе ходят купюры номиналами а<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub> долларов. Однажды ковбой Джо решил ограбить банк. Он выбрал очень неудачный момент для ограбления, ведь сейчас в банке находятся ровно по две купюры каждого существующего номинала.

Ковбой Джо хочет украсть ровно п долларов, ни долларом больше, ни долларом меньше. Помогите ему или сообщите. что его план неосуществим.

## Формат входных данных

В первой строке дано целое число ***n***, ***m***  (1 ≤ ***n*** ≤ 2 • 10<sup>5</sup>, 1 ≤ ***m*** ≤ 10) – количество карт в последовательности.

Во второй строке вводятся ***m*** попарно различных целых чисел а<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub> (1 ≤ a<sub>*i*</sub> ≤ 10<sup>9</sup>) – существующие номиналы купюр.

## Формат выходных данных

Если ковбой Джо сможет украсть ровно ***n*** долларов, выведите число ***k*** – количество украденных купюр. Затем выведите ***k*** целых чисел – номиналы купюр. Если решений несколько, вы можете вывести любое.

В противном случае выведите – 1.