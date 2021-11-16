// Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

let input = `1895
1732
1660
1658
1878
367
2010
1989
431
1946
1614
2003
945
1856
1934
1937
1781
1947
1991
1917
1604
1707
1966
1959
1182
1828
1880
1908
1942
1687
1611
1922
1913
1803
1976
1718
1885
1971
2000
1912
1981
1776
1901
1941
1935
1977
1907
1893
1898
1975
2001
1833
1951
1939
1988
1870
1985
1932
1930
1938
1926
1931
1982
76
1979
657
1872
1933
1961
1987
1998
1994
418
1914
1929
1810
2009
1712
830
1990
1900
1876
1753
1859
1965
1963
1905
1921
1685
1694
697
1899
1997
1964
1927
1952
1894
1960
1986
1883
1616
1993
1892
1943
2005
1995
1915
1663
1954
1902
1191
1948
1875
1850
1955
1962
1984
1957
1969
1887
1953
1786
1638
1909
1881
603
1973
1784
1869
1925
1968
1737
1807
1950
1992
1936
1918
1891
1897
1940
1919
1910
1862
1958
1832
1904
1791
1920
1874
1729
1643
2007
1871
1999
1584
1890
1924
1974
1701
1906
143
1725
1945
1783
1873
1903
167
1855
1633
1956
1996
1808
1884
1916
829
2002
1852
1835
1889
1983
1949
1970
1774
1764
1609
1882
1857
2004
1911
1896
1980
2006
1967
2008
1972
1648
1923
1978
1675
1831`;

// split by new line, then parseInt each one as each expense is still a string
let inputArr = input.split("\n");
let inputExpenses = inputArr.map(input => parseInt(input));

function find2020() {
  for (let i = 0; i < inputExpenses.length; i++) {
    for (let j = 0; j < inputExpenses.length; j++) {
      if (i !== j && inputExpenses[i] + inputExpenses[j] === 2020) {
        return inputArr[i] * inputArr[j];
      }
    }
  }
}
console.log(find2020());  // 987339

// --- Part Two ---
// Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.
// In your expense report, what is the product of the three entries that sum to 2020?

function find2020Part2() {
  for (let i = 0; i < inputExpenses.length; i++) {
    for (let j = 0; j < inputExpenses.length; j++) {
      for (let k = 0; k < inputExpenses.length; k++) {
        if (i !== j && i !== k && inputExpenses[i] + inputExpenses[j] + inputExpenses[k] === 2020) {
          return inputArr[i] * inputArr[j] * inputArr[k];
        }
      }
    }
  }
}
console.log(find2020Part2()); // 259521570