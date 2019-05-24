#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
#include <stack>
#include <string>
using namespace std;


int main() {
    stack<string> result;
    string str;
    int cases;
    cin>>cases;
    for(int i = 0;i<cases;i++)
    {   int option;
        cin>>option;
        string temp = "";
        int charnum;
        switch(option)
        {
            case 1: cin >> temp;
                    str += temp;
                    result.push(str);
                    break;
            case 2: cin>>charnum;
                    temp = result.top();
                    
                    temp = temp.substr(0,temp.size() - charnum );
                    result.push(temp);
                    break;   
            case 3: cin>>charnum;
                    temp = result.top();
                    //cout<<temp[charnum]<<"\n";
                    break;    
            case 4:result.pop(); 
                    str = result.top();
                    break;
        }
     //cout<<i<<str<<"\n";
    }
    
    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    return 0;
}