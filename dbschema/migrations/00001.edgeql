CREATE MIGRATION m13cbte5bdvtwzq5lph3tnycrzb2lflmroqkps4dyzbjntjnxxh3xa
    ONTO initial
{
  CREATE TYPE default::Todo {
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
