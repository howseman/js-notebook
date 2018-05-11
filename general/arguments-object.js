function func1 (a, b, c) {
  console.log(arguments[0]); // Like console.log(a)
  console.log(arguments[1]); // Like console.log(b)
  console.log(arguments[2]); // Like console.log(c)
}

function func2() {
  console.log(arguments); // { '0': 5, '1': 6, '2': 7 }
}

func1(1, 2, 3);
func2(5, 6, 7);
