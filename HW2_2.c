#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <ctype.h>
#include<fcntl.h>
#include<sys/wait.h>
#include<wait.h>

int main(int argc,char *argv[])
{
    int fd1[2],fd2[2];
    int input,output;
    int n; char buf[10];

    pipe(fd1);
    pipe(fd2);
    if(fork() == 0){//child1 process
        close(fd1[1]);
        close(fd2[0]);
        while((n = read(fd1[0],buf,10)) != 0){
            for(int i=0;i < n; ++i){ //change upper alpa
                buf[i] = toupper(buf[i]);
            }
            write(fd2[1],buf,10);
        }
        close(fd1[0]);
        close(fd2[1]);
        exit(0);
        }
    else{
        if(fork() == 0){
            close(fd1[0]);
            close(fd1[1]);
            close(fd2[1]);
            output = creat("output2.dat",0666);
            while(( n = read(fd2[0],buf,10) != 0)){
                write(output,buf,10);}
            close(output);
            close(fd2[0]);
            exit(1);
                
        }
        else{ //parent process
            input = open("input2.txt",0); //open file "input.dat" for reading
            close(fd1[0]);
            close(fd2[1]);
            close(fd2[0]);
            while(( n = read(input,buf,10) != 0)){
                write(fd1[1],buf,10);
            }
            close(input);
            close(fd1[1]);
            

            wait(NULL);

        }
    }
    return 0;
    }
