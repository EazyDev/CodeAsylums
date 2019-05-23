#include <iostream>
#include <bits/stdc++.h>

using namespace std;

void check(string str)
{
    char temp;
    stack <int> stak;
    for(int i = 0;i<str.size();i++)
    {
        if(str[i] == '(' || str[i] == '{' || str[i] == '[')
        {
            stak.push(str[i]);
        }
        else
        {
            switch(str[i])
            {
                case ']' :
                           temp = stak.top();
                           if(temp == '[')
                           {
                               stak.pop();
                           }
                           break;
                case '}' :
                           temp = stak.top();
                           if(temp == '{')
                           {
                               stak.pop();
                           }
                           break;
                case ')' :
                           temp = stak.top();
                           if(temp == '(')
                           {
                               stak.pop();
                           }
                           break;
            }
        }
    }

    if(stak.empty())
    {
        cout<<"balanced\n";
    }
    else
    {
        cout<<"not balanced\n";
    }


}

int main() {
	//code
	int testcases;
	cin>>testcases;
	while(testcases--)
	{
	    string str;
	    getline(cin,str);
	    check(str);
	}
	return 0;
}
