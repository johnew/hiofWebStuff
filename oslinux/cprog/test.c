

#include <stdlib.h>
#include <stdio.h>

// --- funksjon deklarasjoner.
void mehmeh();
int rettall();
void printInt();


main() 
{

	//system("echo \"*\n*\n*\n*\n*\""); ///printf("mehmeh\n"); //mehmeh();¨//printInt(rettall(45));
	printf("hallo din bæsj\n");
}


void mehmeh() {
	printf("funki funk\n");
}

int rettall(int a) {
	a = a + 5;
	return a;
}
int tallper(int a, int b) {
	int c = a * b;
	return c;
}
void printInt(int a) {
	printf("%d\n",a);
}
